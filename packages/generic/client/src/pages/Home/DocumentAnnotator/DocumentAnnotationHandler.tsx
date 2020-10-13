import React, { useState } from 'react';
import { annotationType, anonymizerType, documentType, settingsType } from '@label/core';
import { LayoutGrid } from '../../../components';
import { AnnotationsPanel } from './AnnotationsPanel';
import { DocumentPanel } from './DocumentPanel';

export { DocumentAnnotationHandler };

function DocumentAnnotationHandler(props: {
  document: documentType;
  anonymizer: anonymizerType;
  annotations: annotationType[];
  settings: settingsType;
}) {
  const [localAnnotations] = useState(props.annotations);
  return (
    <LayoutGrid container>
      <LayoutGrid container item xs={4}>
        <AnnotationsPanel annotations={localAnnotations} anonymizer={props.anonymizer} settings={props.settings} />
      </LayoutGrid>
      <LayoutGrid container item xs={8}>
        <DocumentPanel
          annotations={localAnnotations}
          anonymizer={props.anonymizer}
          document={props.document}
          settings={props.settings}
        />
      </LayoutGrid>
    </LayoutGrid>
  );
}
