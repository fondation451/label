import React, { CSSProperties } from 'react';
import { LayoutGrid, Text } from '../../../../components';
import { annotatorStateHandlerType } from '../../../../services/annotatorState';
import { clientAnonymizerType } from '../../../../types';
import { wordings } from '../../../../wordings';
import { customThemeType, heights, useCustomTheme } from '../../../../styles';
import { annotationPerCategoryAndEntityType, splittedTextByLineType } from '../lib';
import { CategoryTable } from './CategoryTable';
import { useEntityEntryHandler } from './useEntityEntryHandler';

export { AnnotationsPanel };

function AnnotationsPanel(props: {
  annotatorStateHandler: annotatorStateHandlerType;
  anonymizer: clientAnonymizerType;
  annotationPerCategoryAndEntity: annotationPerCategoryAndEntityType;
  splittedTextByLine: splittedTextByLineType;
}) {
  const theme = useCustomTheme();
  const styles = buildStyles(theme);
  const entityEntryHandler = useEntityEntryHandler(props.splittedTextByLine);

  return (
    <LayoutGrid style={styles.panel}>
      <LayoutGrid container alignItems="center" style={styles.panelHeader}>
        <LayoutGrid item>
          <Text variant="h2">{wordings.askedAnnotations}</Text>
        </LayoutGrid>
      </LayoutGrid>
      <LayoutGrid style={styles.categoriesContainer}>
        {props.annotationPerCategoryAndEntity.map(({ category, categorySize, categoryAnnotations }) => (
          <LayoutGrid key={category} style={styles.category}>
            <CategoryTable
              annotatorStateHandler={props.annotatorStateHandler}
              anonymizer={props.anonymizer}
              categoryAnnotations={categoryAnnotations}
              category={category}
              categorySize={categorySize}
              entityEntryHandler={entityEntryHandler}
              splittedTextByLine={props.splittedTextByLine}
            />
          </LayoutGrid>
        ))}
      </LayoutGrid>
    </LayoutGrid>
  );

  function buildStyles(theme: customThemeType): { [cssClass: string]: CSSProperties } {
    return {
      panel: {
        paddingLeft: theme.spacing * 2,
        paddingRight: theme.spacing * 4,
      },
      panelHeader: {
        height: heights.panelHeader,
      },
      categoriesContainer: {
        overflowY: 'auto',
        height: heights.panel,
      },
      category: {
        marginBottom: theme.spacing * 3,
      },
    };
  }
}
