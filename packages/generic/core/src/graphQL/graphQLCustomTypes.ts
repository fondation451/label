import {
  annotationModule,
  documentModule,
  monitoringEntryModule,
  settingsModule,
  dataModelFieldType,
  problemReportModule,
  treatmentModule,
} from '../modules';
import { buildGraphQLCustomTypeFields } from './buildGraphQLCustomTypeFields';

export { graphQLCustomTypes };

export type { graphQLCustomTypeType };

type graphQLCustomTypeType = {
  name: string;
  fields: { [key: string]: dataModelFieldType };
};

const graphQLCustomTypes = {
  annotation: {
    name: 'annotation',
    fields: buildGraphQLCustomTypeFields<typeof annotationModule.dataModel>(annotationModule.dataModel),
  },
  document: {
    name: 'document',
    fields: buildGraphQLCustomTypeFields<typeof documentModule.dataModel>(documentModule.dataModel),
  },
  monitoringEntry: {
    name: 'monitoringEntry',
    fields: buildGraphQLCustomTypeFields<typeof monitoringEntryModule.dataModel>(monitoringEntryModule.dataModel),
  },
  problemReport: {
    name: 'problemReport',
    fields: buildGraphQLCustomTypeFields<typeof problemReportModule.dataModel>(problemReportModule.dataModel),
  },
  settings: {
    name: 'settings',
    fields: buildGraphQLCustomTypeFields<typeof settingsModule.dataModel>(settingsModule.dataModel),
  },
  success: {
    name: 'success',
    fields: {
      success: 'boolean',
    },
  },
  treatment: {
    name: 'treatment',
    fields: buildGraphQLCustomTypeFields<typeof treatmentModule.dataModel>(treatmentModule.dataModel),
  },
} as const;

// We need this line for type checking
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _typeCheck: {
  [customTypeName: string]: graphQLCustomTypeType;
} = graphQLCustomTypes;
