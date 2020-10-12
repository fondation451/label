import { annotationType, settingsType } from '@label/core';

export { getAnnotationColor };

const DEFAULT_ANNOTATION_COLOR = '#00FF00';

function getAnnotationColor(annotation: annotationType, settings: settingsType) {
  const color = settings[annotation.category]?.color;

  if (color) {
    return color;
  } else {
    return DEFAULT_ANNOTATION_COLOR;
  }
}
