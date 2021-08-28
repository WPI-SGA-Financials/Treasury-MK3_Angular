export interface ITableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
}

export interface IActiveSort {
  isActive: boolean;
  dataKey: string;
  direction: 'asc' | 'desc';
}
