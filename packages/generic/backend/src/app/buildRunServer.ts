import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { environmentHandler, settingsType } from '@label/core';

import { buildApi } from '../api';
import { environmentType } from '../lib/environment';
import { setup } from './setup';

export { buildRunServer };

function buildRunServer(environment: environmentType, settings: settingsType) {
  return () => {
    const app = express();

    app.use(
      cors({
        origin: [
          `${
            environment.pathName.server
          }:${environmentHandler.convertServerPortToClientPort(
            environment.port.server,
          )}`,
        ],
      }),
    );

    app.use(bodyParser.json());

    buildApi(app);

    app.listen(environment.port.server, async () => {
      await setup(environment, settings);
    });
  };
}
