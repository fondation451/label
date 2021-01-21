import React, { ReactElement } from 'react';
import { apiRouteOutType, idModule } from '@label/core';
import { apiCaller, useApi } from '../../../api';
import { DataFetcher } from '../../DataFetcher';

export { ProblemReportsDataFetcher };

function ProblemReportsDataFetcher(props: {
  alwaysDisplayHeader?: boolean;
  children: (fetched: {
    problemReportsWithDetails: apiRouteOutType<'get', 'problemReportsWithDetails'>;
  }) => ReactElement;
}) {
  const problemReportsFetchInfo = useApi(buildFetchProblemReports());

  return (
    <DataFetcher
      alwaysDisplayHeader={props.alwaysDisplayHeader}
      buildComponentWithData={(problemReportsWithDetails: apiRouteOutType<'get', 'problemReportsWithDetails'>) =>
        props.children({ problemReportsWithDetails })
      }
      fetchInfo={problemReportsFetchInfo}
    />
  );
}

function buildFetchProblemReports() {
  return async () => {
    const { data: problemReportsWithDetails, statusCode } = await apiCaller.get<'problemReportsWithDetails'>(
      'problemReportsWithDetails',
    );
    return {
      data: problemReportsWithDetails.map(({ problemReport, name }) => ({
        problemReport: {
          ...problemReport,
          _id: idModule.lib.buildId(problemReport._id),
          assignationId: idModule.lib.buildId(problemReport.assignationId),
        },
        name,
      })),
      statusCode,
    };
  };
}
