import React, { CSSProperties } from 'react';
import {
  AccountBalanceRounded,
  BookRounded,
  BusinessCenterRounded,
  ChildCareRounded,
  ChildFriendlyRounded,
  CloseRounded,
  CloudRounded,
  DeleteOutlineRounded,
  DirectionsCarRounded,
  ErrorRounded,
  ExitToAppRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  ExtensionRounded,
  FavoriteRounded,
  FileCopyRounded,
  GavelRounded,
  Link,
  LinkOff,
  LoopRounded,
  MapRounded,
  MeetingRoom,
  PersonRounded,
  PhoneRounded,
  RedoRounded,
  ReportProblemRounded,
  RoomRounded,
  SaveAltRounded,
  SendRounded,
  SettingsEthernetRounded,
  SettingsRounded,
  UndoRounded,
} from '@material-ui/icons';
import { categoryIconNameType } from '@label/core/src';

export { Icon };

export type { iconNameType };

const materialIconMapping = {
  arrowExpand: ExpandMoreRounded,
  arrowReduce: ExpandLessRounded,
  changeCategory: ExtensionRounded,
  close: CloseRounded,
  copy: FileCopyRounded,
  delete: DeleteOutlineRounded,
  error: ErrorRounded,
  link: Link,
  login: ExitToAppRounded,
  logout: MeetingRoom,
  redo: RedoRounded,
  reset: LoopRounded,
  resize: SettingsEthernetRounded,
  send: SendRounded,
  save: SaveAltRounded,
  settings: SettingsRounded,
  undo: UndoRounded,
  unlink: LinkOff,
  warning: ReportProblemRounded,
};

const categoryIconMapping: Record<categoryIconNameType, React.ElementType> = {
  bank: AccountBalanceRounded,
  book: BookRounded,
  car: DirectionsCarRounded,
  child: ChildCareRounded,
  cloud: CloudRounded,
  hammer: GavelRounded,
  heart: FavoriteRounded,
  location: RoomRounded,
  map: MapRounded,
  person: PersonRounded,
  phone: PhoneRounded,
  stroller: ChildFriendlyRounded,
  work: BusinessCenterRounded,
};

const iconMapping = {
  ...materialIconMapping,
  ...categoryIconMapping,
};

type iconNameType = keyof typeof materialIconMapping | keyof typeof categoryIconMapping;

function Icon(props: { iconName: iconNameType; style?: CSSProperties }) {
  const IconComponent = iconMapping[props.iconName];
  return <IconComponent style={props.style} />;
}
