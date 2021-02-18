import { documentType, idModule } from '@label/core';
import {
  buildFakeRepositoryBuilder,
  updateFakeCollection,
} from '../../../repository';
import { customDocumentRepositoryType } from './customDocumentRepositoryType';

export { buildFakeDocumentRepository };

const buildFakeDocumentRepository = buildFakeRepositoryBuilder<
  documentType,
  customDocumentRepositoryType
>({
  buildCustomFakeRepository: (collection) => ({
    async assign() {
      const freeDocument = collection.find(
        (document) => document.status === 'free',
      );

      if (!freeDocument) {
        throw new Error(`No free document`);
      }

      updateFakeCollection(
        collection,
        collection.map((document) =>
          idModule.lib.equalId(document._id, freeDocument._id)
            ? { ...document, status: 'pending' }
            : document,
        ),
      );

      return freeDocument;
    },

    async findAllByStatus(status) {
      return collection.filter((document) => document.status === status);
    },

    async updateStatusById(id, status) {
      updateFakeCollection(
        collection,
        collection.map((document) =>
          idModule.lib.equalId(id, document._id)
            ? {
                ...document,
                status,
                updateDate: new Date().getTime(),
              }
            : document,
        ),
      );
    },
  }),
});
