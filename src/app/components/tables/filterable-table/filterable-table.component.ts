import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IActions, IActiveSort, ITableColumn } from '../types/table-interfaces';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IFilter } from '../../filters/types/filter';

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
  @Input() filters: IFilter[] = [];

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
