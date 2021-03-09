import {
  assignationType,
  errorHandlers,
  hasher,
  idModule,
  userModule,
  userType,
} from '@label/core';
import { buildUserRepository } from '../repository';
import { jwtSigner, mailer } from '../../../utils';
import { wordings } from '../../../wordings';

export { userService };

const DEFAULT_ROLE = 'annotator';

const userService = {
  async changePassword({
    user,
    previousPassword,
    newPassword,
  }: {
    user: userType;
    previousPassword: string;
    newPassword: string;
  }) {
    const userRepository = buildUserRepository();

    const isPreviousPasswordValid = await hasher.compare(
      previousPassword,
      user.hashedPassword,
    );

    if (!isPreviousPasswordValid) {
      return 'wrongPassword';
    } else if (!userModule.lib.isPasswordValid(newPassword)) {
      return 'notValidNewPassword';
    } else {
      await userRepository.updateHashedPassword(
        user,
        await userModule.lib.computeHashedPassword(newPassword),
      );

      return 'passwordUpdated';
    }
  },

  async fetchUserNamesByAssignationId(
    assignationsById: Record<string, assignationType>,
  ) {
    const userRepository = buildUserRepository();
    const userIds = Object.values(assignationsById).map(
      (assignation) => assignation.userId,
    );
    const usersById = await userRepository.findAllByIds(userIds);
    const userNamesByAssignationId = Object.entries(assignationsById).reduce(
      (accumulator, [assignationId, assignation]) => {
        const user =
          usersById[idModule.lib.convertToString(assignation.userId)];

        return {
          ...accumulator,
          [assignationId]: user.name,
        };
      },
      {} as Record<string, string>,
    );

    return userNamesByAssignationId;
  },

  async fetchUsersWithDetails() {
    const userRepository = buildUserRepository();
    const users = await userRepository.findAll();
    return users.map(({ _id, email, name, role }) => ({
      user: {
        _id,
        email,
        name,
        role,
      },
    }));
  },

  async login({
    email,
    password,
  }: {
    email: userType['email'];
    password: string;
  }) {
    const userRepository = buildUserRepository();
    const user = await userRepository.findByEmail(email);

    if (!(await userModule.lib.isUserPassword(user, password))) {
      throw new Error(
        `The received password does not match the stored one for ${user.email}`,
      );
    }

    const token = jwtSigner.sign(user._id);

    return {
      email: user.email,
      name: user.name,
      role: user.role,
      token,
    };
  },
  async resetPasswordRequest(email: string) {
    const userRepository = buildUserRepository();
    const storedUser = await userRepository.findByEmail(email);
    const resetPasswordRequestToken = jwtSigner.sign(storedUser._id);
    const resetPasswordLink = `${process.env.WEBAPP_URL}/reset-password/${resetPasswordRequestToken}`;
    const text = `${wordings.resetPasswordMailText}${resetPasswordLink}`;
    await mailer.sendMail({
      to: email,
      subject: wordings.resetPasswordMailSubject,
      text: text,
    });
  },
  async signUpUser({
    email,
    name,
    password,
    role = DEFAULT_ROLE,
  }: {
    email: string;
    name: string;
    password: string;
    role?: userType['role'];
  }) {
    const userRepository = buildUserRepository();
    const newUser = await userModule.lib.buildUser({
      email,
      name,
      password,
      role,
    });

    return userRepository.insert(newUser);
  },
  async resetPassword(password: string, resetPasswordToken: string) {
    const userStrId = jwtSigner.verifyToken(resetPasswordToken);
    const userRepository = buildUserRepository();
    const userId = idModule.lib.buildId(userStrId);
    const user = await userRepository.findById(userId);
    const hashedPassword = await hasher.hash(password);
    return await userRepository.updateHashedPassword(user, hashedPassword);
  },
  async fetchAuthenticatedUserFromAuthorizationHeader(authorization?: string) {
    const userRepository = buildUserRepository();

    if (authorization) {
      const token = authorization.split(' ')[1];
      const userId = jwtSigner.verifyToken(token);

      try {
        return await userRepository.findById(idModule.lib.buildId(userId));
      } catch (_error) {
        throw errorHandlers.authenticationErrorHandler.build(
          `No user for ${userId}`,
        );
      }
    } else {
      throw errorHandlers.authenticationErrorHandler.build(
        'No authorization value provided',
      );
    }
  },
};
