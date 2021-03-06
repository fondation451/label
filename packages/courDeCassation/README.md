# NLP annotator

The NLP annotator is the interface we have with the NLP engine of the "Cour de Cassation".

## Importation

To import all the documents from Jurinet, run the following cron: `./src/crons/importAllDocumentsFromJurinet.ts`

To annotate all the documents of the database, run the following cron: `./src/crons/annotateDocumentsWithoutAnnotationsWithNlp.ts`

## Local version

In order to be able to run LABEL locally, it is possible to use a test dataset stored locally.

To do so, you need to put all your Jurinet court decisions in a folder `./storage/documents` at the root of the
package. The court decisions should be in the jurinet xml format. Their name should be `${idOfTheCourtDecision}.xml`.

To do so, you need to put all your annotations in a folder `./storage/annotations` at the root of the
package. The annotations should be in our nlp engine format. Their name should be `${idOfTheCourtDecision}.json`
(to be able to link them to the corresponding court decision).

To run the local version of the annotator, you have to use node with the proper environment variable set `RUN_MODE=LOCAL`.
