import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActiveSort, ITableColumn } from '../types/table-interfaces';
import { ColumnTypes } from '../types/table-enums';

@Component({
  selector: 'app-http-pageable-table',
  templateUrl: './http-pageable-table.component.html',
  styleUrls: ['./http-pageable-table.component.scss']
})
export class HttpPageableTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  @Input() isLoadingResults: boolean = false;
  @Input() isSortable = false;
  @Input() tableColumns: ITableColumn[] = [];
  @Input() paginationSizes: number[] = [10];
  @Input() defaultPageSize = 10;
  @Input() activeSort: IActiveSort = { dataKey: '', direction: 'desc' };
  // Pass down pageable response and handle setting index and such
  @Input() tableData: PagedResponseModel<any> = {} as PagedResponseModel<any>;

  // TODO: Make one emitter for everything (Row Action, Sort Change, Page Change)
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  @Output() tableEvent: EventEmitter<any> = new EventEmitter<any>();

  DATE = ColumnTypes.DATE;
  CURRENCY = ColumnTypes.CURRENCY;
  INACTIVE = ColumnTypes.INACTIVE;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((tableColumn: ITableColumn) => tableColumn.name);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0
      this.tableEvent.emit({type: 'SortChange', data: {sortColumn: '', direction: ''}})
    });

    this.paginator.page.subscribe(() => {
      this.tableEvent.emit({type: 'PageChange', data: {pageIndex: this.paginator.pageIndex}})
    })
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}
