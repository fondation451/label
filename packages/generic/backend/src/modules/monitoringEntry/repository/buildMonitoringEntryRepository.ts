import { monitoringEntryType } from '@label/core';
import { buildRepositoryBuilder } from '../../../repository';
import { customMonitoringEntryRepositoryType } from './customMonitoringEntryRepositoryType';

export { buildMonitoringEntryRepository };

const buildMonitoringEntryRepository = buildRepositoryBuilder<
  monitoringEntryType,
  customMonitoringEntryRepositoryType
>({
  collectionName: 'monitoringEntries',
  indexes: [],
  buildCustomRepository: (collection) => ({
    async deleteByDocumentId(documentId) {
      await collection.deleteMany({ documentId });
    },
  }),
});
