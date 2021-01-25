import React, { ReactElement } from 'react';
import { apiRouteOutType } from '@label/core';
import { ProblemReportIcon, Table, Text } from '../../../../components';
import { wordings } from '../../../../wordings';

export { ProblemReportsTable };

type formattedProblemReportType = {
  _id: string;
  name: string;
  type: ReactElement;
  text: string;
};

const PROBLEM_REPORT_ICON_SIZE = 24;

function ProblemReportsTable(props: {
  problemReportsWithDetails: apiRouteOutType<'get', 'problemReportsWithDetails'>;
}) {
  const formattedProblemReports = formatProblemReportsWithDetails(props.problemReportsWithDetails);
  const optionItems = buildOptionItems();

  return (
    <Table
      isHeaderSticky
      data={formattedProblemReports}
      header={[
        {
          id: '_id',
          content: <Text variant="h3">{wordings.problemReportsPage.table.columnTitles.number}</Text>,
          canBeSorted: true,
        },
        {
          id: 'name',
          content: <Text variant="h3">{wordings.problemReportsPage.table.columnTitles.agent}</Text>,
          canBeSorted: true,
        },
        {
          id: 'type',
          content: <Text variant="h3">{wordings.problemReportsPage.table.columnTitles.type}</Text>,
          canBeSorted: true,
        },
        {
          id: 'text',
          content: <Text variant="h3">{wordings.problemReportsPage.table.columnTitles.text}</Text>,
          canBeSorted: true,
        },
      ]}
      optionItems={optionItems}
    />
  );
}

function buildOptionItems() {
  return [
    {
      text: wordings.problemReportsPage.table.optionItems.reinjectIntoStream,
      onClick: () => null,
    },
  ];
}

function formatProblemReportsWithDetails(
  problemReportsWithDetails: apiRouteOutType<'get', 'problemReportsWithDetails'>,
): formattedProblemReportType[] {
  return problemReportsWithDetails.map(({ problemReport, name }) => ({
    _id: `${problemReport._id}`,
    name,
    type: <ProblemReportIcon type={problemReport.type} iconSize={PROBLEM_REPORT_ICON_SIZE} />,
    text: problemReport.text,
  }));
}
