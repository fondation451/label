import {
  annotationModule,
  annotationsDiffModule,
  idModule,
  treatmentModule,
} from '@label/core';
import { buildTreatmentRepository } from '../repository';
import { treatmentService } from './treatmentService';

describe('treatmentService', () => {
  const treatmentRepository = buildTreatmentRepository();

  describe('deleteTreatmentsByDocumentId', () => {
    it('should remove all the treatments from the database with the given document id', async () => {
      const documentId = idModule.lib.buildId();
      const treatments = ([
        { documentId },
        { documentId },
        { documentId: idModule.lib.buildId() },
      ] as const).map(treatmentModule.generator.generate);
      await Promise.all(treatments.map(treatmentRepository.insert));

      await treatmentService.deleteTreatmentsByDocumentId(documentId);

      const treatmentsAfterRemove = await treatmentRepository.findAll();
      expect(treatmentsAfterRemove).toEqual([treatments[2]]);
    });
  });

  describe('fetchAnnotationsOfDocument', () => {
    it('should fetch the annotations from the treatments of the given document id', async () => {
      const annotations = [
        { text: '0' },
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
      ].map(annotationModule.generator.generate);
      const documentId = idModule.lib.buildId();
      const treatments = [
        {
          annotationsDiff: annotationsDiffModule.generator.generate({
            before: [],
            after: [annotations[0], annotations[1]],
          }),
          documentId,
          order: 0,
        },
        {
          annotationsDiff: annotationsDiffModule.generator.generate({
            before: [annotations[0]],
            after: [annotations[2]],
          }),
          documentId,
          order: 1,
        },
        {
          annotationsDiff: annotationsDiffModule.generator.generate({
            before: [annotations[1]],
            after: [annotations[3], annotations[4]],
          }),
          documentId,
          order: 2,
        },
      ].map(treatmentModule.generator.generate);
      await Promise.all(treatments.map(treatmentRepository.insert));

      const fetchedAnnotations = await treatmentService.fetchAnnotationsOfDocument(
        documentId,
      );

      expect(annotationModule.lib.sortAnnotations(fetchedAnnotations)).toEqual(
        annotationsDiffModule.lib.buildAnnotationsDiff(
          [],
          annotationModule.lib.sortAnnotations([
            annotations[2],
            annotations[3],
            annotations[4],
          ]),
        ).after,
      );
    });
  });

  describe('fetchTreatmentsByDocumentId', () => {
    it('should fetch the treatments for the given document id', async () => {
      const documentId1 = idModule.lib.buildId();
      const documentId2 = idModule.lib.buildId();
      const treatments = [
        {
          documentId: documentId1,
        },
        {
          documentId: documentId1,
        },
        {
          documentId: documentId2,
        },
      ].map(treatmentModule.generator.generate);
      await Promise.all(treatments.map(treatmentRepository.insert));

      const documentTreatments = await treatmentService.fetchTreatmentsByDocumentId(
        documentId1,
      );

      expect(documentTreatments.sort()).toEqual(
        [treatments[0], treatments[1]].sort(),
      );
    });
  });

  describe('fetchTreatmentsByDocumentIds', () => {
    it('should fetch the treatments for the given document ids', async () => {
      const documentId1 = idModule.lib.buildId();
      const documentId2 = idModule.lib.buildId();
      const treatments = [
        {
          documentId: documentId1,
          order: 3,
        },
        {
          documentId: documentId1,
          order: 2,
        },
        {
          documentId: documentId2,
          order: 1,
        },
      ].map(treatmentModule.generator.generate);
      await Promise.all(treatments.map(treatmentRepository.insert));

      const documentTreatments = await treatmentService.fetchTreatmentsByDocumentIds(
        [documentId1, documentId2],
      );

      expect(documentTreatments).toEqual({
        [idModule.lib.convertToString(documentId1)]: [
          treatments[1],
          treatments[0],
        ],
        [idModule.lib.convertToString(documentId2)]: [treatments[2]],
      });
    });
  });

  describe('fetchTreatedDocumentIds', () => {
    it('should fetch the annotations from the treatments of the given document id', async () => {
      const documentId1 = idModule.lib.buildId();
      const documentId2 = idModule.lib.buildId();
      const treatments = [
        {
          documentId: documentId1,
        },
        {
          documentId: documentId1,
        },
        {
          documentId: documentId2,
        },
      ].map(treatmentModule.generator.generate);
      await Promise.all(treatments.map(treatmentRepository.insert));

      const treatedDocumentIds = await treatmentService.fetchTreatedDocumentIds();

      expect(treatedDocumentIds.sort()).toEqual(
        [documentId1, documentId2].sort(),
      );
    });
  });
});
