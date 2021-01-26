import { buildBackend } from '@label/backend';
import { sderConnector } from '../connector';
import { parametersHandler } from '../lib/parametersHandler';

(async () => {
  const { environment, settings } = await parametersHandler.getParameters();
  const backend = buildBackend(environment, settings);

  backend.runScript(importAllDocumentsFromSder, { shouldLoadDb: true });
})();

async function importAllDocumentsFromSder() {
  await sderConnector.importAllDocuments();
}