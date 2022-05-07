import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllMetadata } from '@treasury-components/filters/types/metadata.model';
import { PagedRequestModel } from '@treasury-types/paged-request.model';
import { FundingRequestPopupComponent } from '@treasury-components/popups/funding-request-popup/funding-request-popup.component';
import { FundingRequestService } from '@treasury-services/api-services/funding-request.service';
import { IActionEvent, IActions, ITableColumn } from '@treasury-components/tables/types/table-interfaces';
import { FundingRequest } from '@treasury-types/funding-request.model';
import { ActionButtonType, ColumnTypes } from '@treasury-components/tables/types/table-enums';
import { MetadataService } from '@treasury-services/api-services/metadata.service';
import { ProcessFilterSearchService } from '@treasury-services/process-filter-search.service';
import { IFilter } from '@treasury-components/filters/types/filter';
import { ResponseModel } from '@treasury-types/response.model';
import { PagedResponseModel } from '@treasury-types/paged-response.model';
import { IButton } from '@treasury-components/button-group/button-group.component';

@Component({
    selector: 'app-funding-requests-list',
    templateUrl: './funding-requests-list.component.html',
    styleUrls: ['./funding-requests-list.component.scss'],
})
export class FundingRequestsListComponent implements OnInit {
    displayedColumns: ITableColumn[] = [
        {
            name: 'Name of Club',
            dataKey: 'nameOfClub',
            isSortable: false,
        },
        {
            name: 'Fiscal Year',
            dataKey: 'fiscalYear',
        },
        {
            name: 'Hearing Date',
            dataKey: 'hearingDate',
            type: ColumnTypes.DATE,
        },
        {
            name: 'Dot Number',
            dataKey: 'dotNumber',
        },
        {
            name: 'Amount Requested',
            dataKey: 'amountRequested',
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

    dataSource: PagedResponseModel<FundingRequest> = {} as PagedResponseModel<FundingRequest>;

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
        private frService: FundingRequestService,
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
            this.frService
                .getFundingRequests(this.pagedRequest)
                .subscribe((response: PagedResponseModel<FundingRequest>) => {
                    this.dataSource = response;
                    this.isLoading = false;
                });
        });
    }

    onButtonClicked($event: IActionEvent<FundingRequest>) {
        if ($event.type === ActionButtonType.VIEW) {
            this.dialog.open(FundingRequestPopupComponent, {
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
        this.frService
            .getFundingRequests(this.pagedRequest)
            .subscribe((response: PagedResponseModel<FundingRequest>) => {
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
