import React, { ReactElement, CSSProperties } from 'react';
import { buildComponentList } from '../../../utils';
import { LayoutGrid } from '../materialUI';

export { Header };

function Header(props: {
  leftHeaderComponents: ReactElement[];
  rightHeaderComponents: ReactElement[];
  spaceBetweenComponents: number;
  style?: CSSProperties;
  variant: 'classic' | 'mainLeft' | 'mainRight';
}): ReactElement {
  const { left, right } = buildHeaderSized();

  return (
    <LayoutGrid container style={props.style}>
      <LayoutGrid container item xs={left}>
        <LayoutGrid container item alignItems="center">
          {buildComponentList(props.leftHeaderComponents, props.spaceBetweenComponents)}
        </LayoutGrid>
      </LayoutGrid>
      <LayoutGrid container item xs={right}>
        <LayoutGrid container item justifyContent="flex-end" alignItems="center">
          {buildComponentList(props.rightHeaderComponents, props.spaceBetweenComponents)}
        </LayoutGrid>
      </LayoutGrid>
    </LayoutGrid>
  );

  function buildHeaderSized() {
    switch (props.variant) {
      case 'classic':
        return { left: 6, right: 6 } as const;
      case 'mainLeft':
        return { left: 11, right: 1 } as const;
      case 'mainRight':
        return { left: 1, right: 11 } as const;
    }
  }
}
