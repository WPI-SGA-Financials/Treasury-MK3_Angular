import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActions, IActiveSort, ITableColumn } from '../types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../types/table-enums';

@Component({
    selector: 'app-http-pageable-table',
    templateUrl: './http-pageable-table.component.html',
    styleUrls: ['./http-pageable-table.component.scss'],
})
export class HttpPageableTableComponent implements OnInit, AfterViewInit {
    dataSource = new MatTableDataSource<any>([]);

    displayedColumns: string[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

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

    DATE: ColumnTypes = ColumnTypes.DATE;

    CURRENCY: ColumnTypes = ColumnTypes.CURRENCY;

    INACTIVE: ColumnTypes = ColumnTypes.INACTIVE;

    ATYPES_VIEW: ActionButtonType = ActionButtonType.VIEW;

    constructor() {}

    ngOnInit(): void {
        this.displayedColumns = this.tableColumns.map((tableColumn: ITableColumn) => tableColumn.name);

        if (this.actionItems != null && this.actionItems.length > 0) {
            this.displayedColumns = [...this.displayedColumns, 'actionItems'];
        }
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe((value: Sort) => {
            this.paginator.pageIndex = 0;
            this.tableEvent.emit({ type: 'SortChange', data: { sortColumn: '', direction: '' } });
        });

        this.paginator.page.subscribe((page: PageEvent) => {
            console.log(page);
            this.tableEvent.emit({ type: 'PageChange', data: { pageIndex: this.paginator.pageIndex } });
        });
    }

    emitButtonClick($event: MouseEvent, element: any, actionType: ActionButtonType) {
        $event.stopPropagation();
        this.rowAction.emit({
            type: actionType,
            data: element,
        });
    }
}
