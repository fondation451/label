import React, { ReactElement } from 'react';
import { Theme, useTheme } from '@material-ui/core';
import { annotationType, settingsType } from '@label/core';
import { getAnnotationColor } from '../../../../styles';

export { DocumentAnnotationText };

function DocumentAnnotationText(props: {
  annotation: annotationType;
  annotationDisplayedText: string;
  settings: settingsType;
}): ReactElement {
  const theme = useTheme();
  const style = buildStyle(theme);
  console.log('style', style);

  return <span style={style.annotationText}>&nbsp;{props.annotationDisplayedText}&nbsp;</span>;

  function buildStyle(theme: Theme) {
    return {
      annotationText: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: getAnnotationColor(props.annotation, props.settings),
      },
    };
  }
}
