import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IActions, IActiveSort, ITableColumn } from '../types/table-interfaces';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { ActionButtonType, ColumnTypes } from '../types/table-enums';

@Component({
  selector: 'app-filterable-table',
  templateUrl: './filterable-table.component.html',
  styleUrls: ['./filterable-table.component.scss']
})
export class FilterableTableComponent {
  @Input() isLoadingResults: boolean = false;
  @Input() isSortable = false;
  @Input() tableColumns: ITableColumn[] = [];
  @Input() paginationSizes: number[] = [10];
  @Input() defaultPageSize = 10;
  @Input() activeSort: IActiveSort = { dataKey: '', direction: 'desc' };
  // Pass down pageable response and handle setting index and such
  @Input() tableData: PagedResponseModel<any> = {} as PagedResponseModel<any>;
  @Input() actionItems: IActions[] = [];

  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  @Output() tableEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  emitButtonClick($event: any) {
    this.rowAction.emit($event);
  }

  emitTableEvent($event: any) {
    this.tableEvent.emit($event);
  }

}
