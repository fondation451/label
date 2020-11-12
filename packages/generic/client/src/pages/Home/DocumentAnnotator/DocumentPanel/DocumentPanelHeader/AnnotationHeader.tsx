import React from 'react';
import { Header, IconButton, SwitchButton, Text } from '../../../../../components';
import { heights, useCustomTheme } from '../../../../../styles';
import { annotatorStateHandlerType } from '../../../../../services/annotatorState';
import { wordings } from '../../../../../wordings';

export { AnnotationHeader };

function AnnotationHeader(props: {
  annotatorStateHandler: annotatorStateHandlerType;
  isAnonymizedView: boolean;
  switchAnonymizedView: () => void;
}) {
  const theme = useCustomTheme();
  const style = buildStyle();

  return (
    <Header
      leftHeaderComponents={[
        <IconButton
          color="default"
          disabled={!canRevertLastAction()}
          hint={wordings.undo}
          iconName="undo"
          onClick={revertLastAction}
        />,
        <IconButton
          color="default"
          disabled={!canRestoreLastAction()}
          hint={wordings.redo}
          iconName="redo"
          onClick={restoreLastAction}
        />,
      ]}
      rightHeaderComponents={[
        <Text>{wordings.anonymisedView}</Text>,
        <SwitchButton checked={props.isAnonymizedView} color="primary" onChange={props.switchAnonymizedView} />,
      ]}
      spaceBetweenComponents={theme.spacing * 2}
      style={style.header}
      variant="classic"
    />
  );

  function buildStyle() {
    return {
      header: {
        height: heights.panelHeader,
      },
    };
  }

  function revertLastAction() {
    props.annotatorStateHandler.revert();
  }

  function restoreLastAction() {
    props.annotatorStateHandler.restore();
  }

  function canRevertLastAction() {
    return props.annotatorStateHandler.canRevert();
  }

  function canRestoreLastAction() {
    return props.annotatorStateHandler.canRestore();
  }
}