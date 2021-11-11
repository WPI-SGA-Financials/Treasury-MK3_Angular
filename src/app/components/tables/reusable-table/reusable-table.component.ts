import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IActiveSort, ITableColumn } from '../types/table-interfaces';
import { ColumnTypes } from '../types/table-enums';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: ITableColumn[] = [];
  @Input() paginationSizes: number[] = [10];
  @Input() defaultPageSize = 10;
  @Input() activeSort: IActiveSort = { dataKey: '', direction: 'desc' };

  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  @Input() set tableData(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  DATE = ColumnTypes.DATE;
  CURRENCY = ColumnTypes.CURRENCY;
  INACTIVE = ColumnTypes.INACTIVE;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((tableColumn: ITableColumn) => tableColumn.name);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}
