import { Typography } from '@material-ui/core';
import React, { ReactElement, ReactNode } from 'react';

export { Text };

function Text(props: { children: ReactNode; variant?: 'body1' | 'body2' }): ReactElement {
  return <Typography variant={props.variant}>{props.children}</Typography>;
}
