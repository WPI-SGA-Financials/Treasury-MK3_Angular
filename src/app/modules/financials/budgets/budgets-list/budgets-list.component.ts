import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AllMetadata } from '@treasury-components/filters/types/metadata.model';
import { PagedRequestModel } from '@treasury-types/paged-request.model';
import { IActionEvent, IActions, ITableColumn } from '@treasury-components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '@treasury-components/tables/types/table-enums';
import { MetadataService } from '@treasury-services/api-services/metadata.service';
import { BudgetService } from '@treasury-services/api-services/budget.service';
import { BudgetPopupComponent } from '@treasury-components/popups/budget-popup/budget-popup.component';
import { ProcessFilterSearchService } from '@treasury-services/process-filter-search.service';
import { IFilter } from '@treasury-components/filters/types/filter';
import { ResponseModel } from '@treasury-types/response.model';
import { PagedResponseModel } from '@treasury-types/paged-response.model';
import { Budget } from '@treasury-types/budget.model';
import { IButton } from '@treasury-components/button-group/button-group.component';

@Component({
    selector: 'app-budgets-list',
    templateUrl: './budgets-list.component.html',
    styleUrls: ['./budgets-list.component.scss'],
})
export class BudgetsListComponent implements OnInit {
    displayedColumns: ITableColumn[] = [
        {
            name: 'Name of Club',
            dataKey: 'nameOfClub',
        },
        {
            name: 'Fiscal Year',
            dataKey: 'fiscalYear',
        },
        {
            name: 'Number of Items',
            dataKey: 'numOfItems',
        },
        {
            name: 'Amount Requested',
            dataKey: 'amountRequested',
            type: ColumnTypes.CURRENCY,
        },
        {
            name: 'Amount Proposed',
            dataKey: 'amountProposed',
            type: ColumnTypes.CURRENCY,
        },
        {
            name: 'Amount Approved',
            dataKey: 'amountApproved',
            type: ColumnTypes.CURRENCY,
        },
    ];

    dataSource: PagedResponseModel<Budget> = {} as PagedResponseModel<Budget>;

    isLoading: boolean = false;

    actionItems: IActions[] = [
        {
            displayName: 'View',
            actionType: ActionButtonType.VIEW,
        },
    ];

    filters: IFilter[] = [];

    pagedRequest: PagedRequestModel = {
        acronym: [],
        classification: [],
        includeInactive: false,
        name: [],
        page: 1,
        resultsPerPage: 9,
        type: [],
        fiscalYear: [],
        fiscalClass: [],
        minimumRequestedAmount: -1,
        maximumRequestedAmount: -1,
        description: [],
    };

    metadata: AllMetadata = {
        fiscalClasses: [],
        clubClassifications: [],
        clubTypes: [],
        fiscalYears: [],
    };

    buttons: IButton[] = [
        {
            name: 'Budgets',
            routerLink: '/financials/budgets',
        },
        {
            name: 'Funding Requests',
            routerLink: '/financials/funding-requests',
        },
        {
            name: 'Reallocations',
            routerLink: '/financials/reallocations',
        },
    ];

    constructor(
        private budgetService: BudgetService,
        private dialog: MatDialog,
        private metadataService: MetadataService,
        private filterService: ProcessFilterSearchService,
    ) {}

    ngOnInit(): void {
        this.initializeData();
    }

    private initializeData() {
        this.isLoading = true;
        this.metadataService.getAllMetadata().subscribe((response: ResponseModel<AllMetadata>) => {
            this.metadata = response.data;
            this.budgetService.getBudgets(this.pagedRequest).subscribe((response: PagedResponseModel<Budget>) => {
                this.dataSource = response;
                this.isLoading = false;
            });
        });
    }

    onButtonClicked($event: IActionEvent<Budget>) {
        if ($event.type === ActionButtonType.VIEW) {
            this.dialog.open(BudgetPopupComponent, {
                data: {
                    id: $event.data.id,
                    fromOrgView: false,
                },
                maxWidth: '40%',
                minWidth: '30%',
            });
        }
    }

    onTableEvent($event: any) {
        if ($event.type === 'PageChange') {
            this.pagedRequest.page = $event.data.pageIndex + 1;

            this.updateTableData();
        }
    }

    handleRemove($event: IFilter) {
        let updateData;

        ({
            pagedRequest: this.pagedRequest,
            filters: this.filters,
            updateData,
        } = this.filterService.removeFilter($event, this.pagedRequest, this.filters));
        if (updateData) {
            this.updateTableData();
        }
    }

    onSearch($event: IFilter) {
        let updateData;

        ({
            pagedRequest: this.pagedRequest,
            filters: this.filters,
            updateData,
        } = this.filterService.addFilters($event, this.pagedRequest, this.filters));
        if (updateData) {
            this.updateTableData();
        }
    }

    private updateTableData() {
        this.isLoading = true;
        this.budgetService.getBudgets(this.pagedRequest).subscribe((response: PagedResponseModel<Budget>) => {
            this.isLoading = false;
            this.dataSource = response;
        });
    }
}
