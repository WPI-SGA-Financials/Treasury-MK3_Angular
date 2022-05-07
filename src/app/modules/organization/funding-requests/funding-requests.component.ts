import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrgDataService } from '../../../services/org-data.service';
import { FundingRequest } from '../../../types/funding-request.model';
import { FundingRequestPopupComponent } from '../../../components/popups/funding-request-popup/funding-request-popup.component';
import { FundingRequestService } from '../../../services/api-services/funding-request.service';
import { ResponseModel } from '../../../types/response.model';
import { IActionEvent, IActions, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../../../components/tables/types/table-enums';
import { Budget } from '../../../types/budget.model';

@Component({
    selector: 'app-org-funding-requests',
    templateUrl: './funding-requests.component.html',
    styleUrls: ['./funding-requests.component.scss'],
})
export class FundingRequestsComponent implements OnInit {
    displayedColumns: ITableColumn[] = [];

    dataSource: FundingRequest[] = [];

    private _clubName: string = '';

    actionItems: IActions[] = [
        {
            displayName: 'View',
            actionType: ActionButtonType.VIEW,
        },
    ];

    constructor(
        private frService: FundingRequestService,
        private orgDataService: OrgDataService,
        private dialog: MatDialog,
    ) {
        this._clubName = this.orgDataService.getOrgName();
    }

    ngOnInit(): void {
        this.initializeData();
        this.initializeColumns();
    }

    private initializeData() {
        this.frService
            .getOrganizationFundingRequests(this._clubName)
            .subscribe((response: ResponseModel<FundingRequest[]>) => {
                this.setData(response.data);
            });
    }

    private setData(data: FundingRequest[]) {
        this.dataSource = data;
    }

    private initializeColumns() {
        this.displayedColumns = [
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
                name: 'Description',
                dataKey: 'description',
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
    }

    onButtonClicked($event: IActionEvent<FundingRequest>) {
        if ($event.type === ActionButtonType.VIEW) {
            this.dialog.open(FundingRequestPopupComponent, {
                data: {
                    id: $event.data.id,
                    fromOrgView: true,
                },
                maxWidth: '40%',
                minWidth: '30%',
            });
        }
    }
}
