import { fetchedDocumentType, fetchedMonitoringEntryType, monitoringEntryModule } from '@label/core';

export { buildMonitoringEntriesHandler };

export type { monitoringEntriesHandlerType };

type monitoringEntriesHandlerType = {
  addMonitoringEntry: (monitoringyEntryFields: { description: string; type: string }) => void;
  resetMonitoringEntries: () => void;
  sendMonitoringEntries: () => Promise<void>;
};

function buildMonitoringEntriesHandler(
  documentId: fetchedDocumentType['_id'],
  monitoringEntries: fetchedMonitoringEntryType[],
  setMonitoringEntries: (monitoringEntries: fetchedMonitoringEntryType[]) => void,
  uploadMonitoringEntries: (newMonitoringEntries: fetchedMonitoringEntryType[]) => Promise<void>,
): monitoringEntriesHandlerType {
  return {
    addMonitoringEntry,
    resetMonitoringEntries,
    sendMonitoringEntries,
  };

  function addMonitoringEntry(monitoringyEntryFields: { description: string; type: string }) {
    const newMonitoringEntry = monitoringEntryModule.lib.monitoringEntryBuilder.buildFetchedMonitoringEntry({
      ...monitoringyEntryFields,
      documentId,
    });
    setMonitoringEntries([...monitoringEntries, newMonitoringEntry]);
  }

  function resetMonitoringEntries() {
    setMonitoringEntries([]);
  }

  async function sendMonitoringEntries() {
    await uploadMonitoringEntries(monitoringEntries);
  }
}
