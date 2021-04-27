import React from 'react';
import { apiRouteOutType, idModule, ressourceFilterType, userType } from '@label/core';
import { StatisticsBox } from './StatisticsBox';
import { FilterButton, Text } from '../../../components';
import { customThemeType, heights, useCustomTheme, widths } from '../../../styles';
import { wordings } from '../../../wordings';

export { Statistics };

const WIDTH = 350;

function Statistics(props: {
  aggregatedStatistics: apiRouteOutType<'get', 'aggregatedStatistics'>;
  availableStatisticFilters: apiRouteOutType<'get', 'availableStatisticFilters'>;
  users: Omit<userType, 'hashedPassword'>[];
  refetch: (ressourceFilter: ressourceFilterType) => void;
  ressourceFilter: ressourceFilterType;
}) {
  const theme = useCustomTheme();
  const styles = buildStyles(theme);

  const aggregatedStatistics = {
    addedAnnotationsCount: props.aggregatedStatistics.perAssignation.cumulatedValue.addedAnnotationsCount,
    annotationsCount: props.aggregatedStatistics.perDocument.cumulatedValue.annotationsCount,
    deletedAnnotationsCount: props.aggregatedStatistics.perAssignation.cumulatedValue.deletedAnnotationsCount,
    linkedEntitiesCount: props.aggregatedStatistics.perAssignation.cumulatedValue.linkedEntitiesCount,
    modifiedAnnotationsCount: props.aggregatedStatistics.perAssignation.cumulatedValue.modifiedAnnotationsCount,
    resizedBiggerAnnotationsCount:
      props.aggregatedStatistics.perAssignation.cumulatedValue.resizedBiggerAnnotationsCount,
    resizedSmallerAnnotationsCount:
      props.aggregatedStatistics.perAssignation.cumulatedValue.resizedSmallerAnnotationsCount,
    treatmentDuration: props.aggregatedStatistics.perAssignation.cumulatedValue.treatmentDuration,
    wordsCount: props.aggregatedStatistics.perDocument.cumulatedValue.wordsCount,
  };

  const filters = buildFilters();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.filtersContainer}>
          <FilterButton filters={filters} />
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.numberOfDecisionContainer}>
          <Text variant="h1">{wordings.statisticsPage.treatedDecisions}</Text>
          <Text variant="h1">{props.aggregatedStatistics.perDocument.total}</Text>
        </div>
        <StatisticsBox
          aggregatedStatistic={aggregatedStatistics}
          statisticsCount={props.aggregatedStatistics.perAssignation.total}
          width={WIDTH}
        />
      </div>
    </div>
  );

  function buildFilters() {
    const publicationCategoryFilter = buildPublicationCategoryFilter();
    const sourceFilter = buildSourceFilter();
    const userFilter = buildUserFilter();

    return [userFilter, sourceFilter, publicationCategoryFilter];

    function buildPublicationCategoryFilter() {
      return {
        kind: 'dropdown' as const,
        name: 'publicationCategory',
        label: wordings.statisticsPage.filter.fields.publicationCategory,
        possibleValues: props.availableStatisticFilters.publicationCategories,
        value: props.ressourceFilter.publicationCategory,
        onChange: (newPublicationCategory: string) => {
          if (newPublicationCategory !== undefined) {
            props.refetch({ ...props.ressourceFilter, publicationCategory: newPublicationCategory });
          }
        },
      };
    }

    function buildSourceFilter() {
      return {
        kind: 'dropdown' as const,
        name: 'source',
        label: wordings.statisticsPage.filter.fields.source,
        possibleValues: props.availableStatisticFilters.sources,
        value: props.ressourceFilter.source,
        onChange: (newSource: string) => {
          if (newSource !== undefined) {
            props.refetch({ ...props.ressourceFilter, source: newSource });
          }
        },
      };
    }

    function buildUserFilter() {
      const userName = props.ressourceFilter.userId && findUserNameByUserId(props.ressourceFilter.userId);

      return {
        kind: 'dropdown' as const,
        name: 'user',
        label: wordings.statisticsPage.filter.fields.agents,
        possibleValues: props.users.map(({ name }) => name),
        value: userName,
        onChange: (userName: string) => {
          const userId = findUserIdByUserName(userName);
          if (!!userId) {
            props.refetch({ ...props.ressourceFilter, userId });
          }
        },
      };
    }
  }

  function findUserIdByUserName(userName: userType['name']) {
    const user = props.users.find(({ name }) => name === userName);
    if (user) {
      return user._id;
    }
  }

  function findUserNameByUserId(userId: userType['_id']) {
    const user = props.users.find(({ _id }) => idModule.lib.equalId(userId, _id));
    if (user) {
      return user.name;
    }
  }
}

function buildStyles(theme: customThemeType) {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      height: heights.statisticsHeaderHeight,
      width: widths.adminContent,
    },
    filtersContainer: {
      paddingTop: theme.spacing * 4,
      paddingLeft: theme.spacing * 3,
    },
    body: {
      height: heights.statisticsBodyHeight,
      width: widths.adminContent,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    numberOfDecisionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing * 3,
      width: `${WIDTH}px`,
    },
  } as const;
}
