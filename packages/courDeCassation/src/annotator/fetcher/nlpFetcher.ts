import { documentType } from '@label/core';
import { nlpApi } from './api';
import { nlpMapper } from './mapper';

export { nlpFetcher };

const nlpFetcher = {
  async fetchAnnotationOfDocument(document: documentType) {
    const nlpAnnotations = await nlpApi.fetchNlpAnnotations(document);

    return {
      annotations: nlpMapper.mapNlpAnnotationsToAnnotations(nlpAnnotations),
      documentId: document._id,
      report: nlpMapper.mapNlpAnnotationstoReport(nlpAnnotations, document),
    };
  },
};