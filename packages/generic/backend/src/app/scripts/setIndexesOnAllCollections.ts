import { buildAnnotationReportRepository } from '../../modules/annotationReport';
import { buildAssignationRepository } from '../../modules/assignation';
import { buildDocumentRepository } from '../../modules/document';
import { buildMonitoringEntryRepository } from '../../modules/monitoringEntry';
import { buildProblemReportRepository } from '../../modules/problemReport';
import { buildTreatmentRepository } from '../../modules/treatment';
import { buildUserRepository } from '../../modules/user';

export { setIndexesOnAllCollections };

async function setIndexesOnAllCollections() {
  const repositories = [
    buildAnnotationReportRepository,
    buildAssignationRepository,
    buildDocumentRepository,
    buildMonitoringEntryRepository,
    buildProblemReportRepository,
    buildTreatmentRepository,
    buildUserRepository,
  ].map((buildRepository) => buildRepository());

  await Promise.all(repositories.map((repository) => repository.setIndexes()));
}
