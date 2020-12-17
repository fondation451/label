import React, { ReactElement } from 'react';
import { treatmentType } from '@label/core';
import { useGraphQLQuery } from '../../../graphQL';
import { DataFetcher } from '../../DataFetcher';

export { TreatmentsDataFetcher };

type treatmentsGraphQLType = {
  treatments: treatmentType[];
};

function TreatmentsDataFetcher(props: {
  alwaysDisplayHeader?: boolean;
  children: (fetched: { treatments: treatmentType[] }) => ReactElement;
}) {
  const treatmentsFetchInfo = useGraphQLQuery<'treatments'>('treatments');
  const treatmentsDataAdapter = ([data]: [treatmentsGraphQLType]) => [data.treatments];

  return (
    <DataFetcher
      alwaysDisplayHeader={props.alwaysDisplayHeader}
      buildComponentWithData={([treatments]) => props.children({ treatments })}
      fetchInfos={[treatmentsFetchInfo]}
      dataAdapter={treatmentsDataAdapter}
    />
  );
}
