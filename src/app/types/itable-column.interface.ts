export enum ColumnTypes {
  DATE = 'date',
  CURRENCY = 'currency'
}

export interface ITableColumn {
  name: string;
  dataKey: string;
  type?: ColumnTypes;
  position?: 'right' | 'left';
  isSortable?: boolean;
}

export interface IActiveSort {
  isActive: boolean;
  dataKey: string;
  direction: 'asc' | 'desc';
}