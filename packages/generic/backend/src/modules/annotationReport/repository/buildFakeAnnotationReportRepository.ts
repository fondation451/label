import { annotationReportType, idModule } from '@label/core';
import {
  buildFakeRepositoryBuilder,
  updateFakeCollection,
} from '../../../repository';
import { customAnnotationReportRepositoryType } from './customAnnotationReportRepositoryType';

export { buildFakeAnnotationReportRepository };

const buildFakeAnnotationReportRepository = buildFakeRepositoryBuilder<
  annotationReportType,
  customAnnotationReportRepositoryType
>({
  collectionName: 'annotationReports',
  buildCustomFakeRepository: (collection) => ({
    async deleteByDocumentId(documentId) {
      updateFakeCollection(
        collection,
        collection.filter(
          (annotationRerport) =>
            !idModule.lib.equalId(annotationRerport.documentId, documentId),
        ),
      );
    },

    async findByDocumentId(documentId) {
      const annotationReport = await collection.find(
        (anotherAnnotationReport) =>
          idModule.lib.equalId(anotherAnnotationReport.documentId, documentId),
      );

      if (!annotationReport) {
        throw new Error(
          `No annotation report for the given document id ${documentId}`,
        );
      }

      return annotationReport;
    },
  }),
});
