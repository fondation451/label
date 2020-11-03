import React from 'react';
import { Theme, useTheme } from '@material-ui/core';
import { settingsModule } from '@label/core';
import { annotatorStateHandlerType } from '../../services/annotatorState';
import { Icon } from '../generic';

export { CategoryIcon };

function CategoryIcon(props: { annotatorStateHandler: annotatorStateHandlerType; category: string; iconSize: number }) {
  const theme = useTheme();
  const styles = buildStyles(theme);

  return (
    <div style={styles.categoryIcon}>
      <Icon
        iconName={settingsModule.lib.getAnnotationCategoryIconName(
          props.category,
          props.annotatorStateHandler.get().settings,
        )}
        style={styles.icon}
      />
    </div>
  );

  function buildStyles(theme: Theme) {
    return {
      categoryIcon: {
        width: props.iconSize,
        height: props.iconSize,
        borderRadius: props.iconSize / 2,
        backgroundColor: settingsModule.lib.getAnnotationCategoryColor(
          props.category,
          props.annotatorStateHandler.get().settings,
        ),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        fontSize: (props.iconSize * 2) / 3,
      },
    } as const;
  }
}
