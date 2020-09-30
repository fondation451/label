import { documentType } from '@label/core';

export type { connectorConfigType };

type connectorConfigType = {
  name: string;
  fetchAllDocuments(): Promise<documentType[]>;
};