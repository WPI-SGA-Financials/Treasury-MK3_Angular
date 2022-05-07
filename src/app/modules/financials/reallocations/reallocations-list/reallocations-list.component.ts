import { Component, OnInit } from '@angular/core';
import { Reallocation } from '@treasury-types/reallocation.model';
import { ReallocationRequestPopupComponent } from '@treasury-components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ReallocationRequestService } from '@treasury-services/api-services/reallocation-request.service';
import { PagedResponseModel } from '@treasury-types/paged-response.model';
import { IActionEvent, IActions, ITableColumn } from '@treasury-components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '@treasury-components/tables/types/table-enums';
import { IFilter } from '@treasury-components/filters/types/filter';
import { MetadataService } from '@treasury-services/api-services/metadata.service';
import { ProcessFilterSearchService } from '@treasury-services/process-filter-search.service';
import { ResponseModel } from '@treasury-types/response.model';
import { AllMetadata } from '@treasury-components/filters/types/metadata.model';
import { PagedRequestModel } from '@treasury-types/paged-request.model';
import { IButton } from '@treasury-components/button-group/button-group.component';

@Component({
    selector: 'app-reallocations-list',
    templateUrl: './reallocations-list.component.html',
    styleUrls: ['./reallocations-list.component.scss'],
})
export class ReallocationsListComponent implements OnInit {
    displayedColumns: ITableColumn[] = [
        {
            name: 'Name of Club',
            dataKey: 'nameOfClub',
            isSortable: false,
        },
        {
            name: 'Hearing Date',
            dataKey: 'hearingDate',
            isSortable: false,
            type: ColumnTypes.DATE,
        },
        {
            name: 'Fiscal Year',
            dataKey: 'fiscalYear',
        },
        {
            name: 'Allocation Amount',
            dataKey: 'allocationAmount',
            type: ColumnTypes.CURRENCY,
        },
        {
            name: 'Decision',
            dataKey: 'decision',
        },
        {
            name: 'Amount Approved',
            dataKey: 'amountApproved',
            type: ColumnTypes.CURRENCY,
        },
    ];

    dataSource: PagedResponseModel<Reallocation> = {} as PagedResponseModel<Reallocation>;

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
        minimumRequestedAmount: -1,
        maximumRequestedAmount: -1,
        description: [],
        dotNumber: [],
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
        private reallocService: ReallocationRequestService,
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
            this.reallocService
                .getReallocations(this.pagedRequest)
                .subscribe((response: PagedResponseModel<Reallocation>) => {
                    this.dataSource = response;
                    this.isLoading = false;
                });
        });
    }

    onButtonClicked($event: IActionEvent<Reallocation>) {
        if ($event.type === ActionButtonType.VIEW) {
            this.dialog.open(ReallocationRequestPopupComponent, {
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
        this.reallocService
            .getReallocations(this.pagedRequest)
            .subscribe((response: PagedResponseModel<Reallocation>) => {
                this.isLoading = false;
                this.dataSource = response;
            });
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
}
