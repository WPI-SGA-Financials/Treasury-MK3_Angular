import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ITableColumn } from '../../types/itable-column.interface';
import { MatTableDataSource } from '@angular/material/table';

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

  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  @Input() set tableData(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((tableColumn: ITableColumn) => tableColumn.name);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}
