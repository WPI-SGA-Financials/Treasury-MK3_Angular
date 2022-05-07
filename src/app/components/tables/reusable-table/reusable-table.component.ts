import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IActions, IActiveSort, ITableColumn } from '../types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../types/table-enums';

@Component({
    selector: 'app-reusable-table',
    templateUrl: './reusable-table.component.html',
    styleUrls: ['./reusable-table.component.scss'],
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

    @Input() actionItems: IActions[] = [];

    @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

    @Input() set tableData(data: any[]) {
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

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
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    emitButtonClick($event: MouseEvent, element: any, actionType: ActionButtonType) {
        $event.stopPropagation();
        this.rowAction.emit({
            type: actionType,
            data: element,
        });
    }
}
