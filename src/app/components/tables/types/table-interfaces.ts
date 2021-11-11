import { ActionButtonType, ColumnTypes } from './table-enums';

export interface IActions {
  displayName: string;
  actionType: ActionButtonType;
}

export interface IActionEvent {
  type: ActionButtonType;
  data: any;
}

export interface ITableColumn {
  name: string;
  dataKey: string;
  subDataKey?: string;
  type?: ColumnTypes;
  position?: 'right' | 'left';
  isSortable?: boolean;
}

export interface IActiveSort {
  dataKey: string;
  direction: 'asc' | 'desc';
}
