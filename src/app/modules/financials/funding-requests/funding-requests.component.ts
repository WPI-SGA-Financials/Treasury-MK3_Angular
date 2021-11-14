import { Component, OnInit } from '@angular/core';
import { FundingRequest } from '../../../types/funding-request.model';
import { MatDialog } from '@angular/material/dialog';
import { FundingRequestPopupComponent } from '../../../components/popups/funding-request-popup/funding-request-popup.component';
import { FundingRequestService } from '../../../services/api-services/funding-request.service';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActionEvent, IActions, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../../../components/tables/types/table-enums';
import { Budget } from '../../../types/budget.model';

@Component({
  selector: 'app-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [
    {
      name: 'Name of Club',
      dataKey: 'nameOfClub',
      isSortable: false
    },
    {
      name: 'Fiscal Year',
      dataKey: 'fiscalYear'
    },
    {
      name: 'Hearing Date',
      dataKey: 'hearingDate',
      type: ColumnTypes.DATE
    },
    {
      name: 'Dot Number',
      dataKey: 'dotNumber'
    },
    {
      name: 'Amount Requested',
      dataKey: 'amountRequested',
      type: ColumnTypes.CURRENCY
    },
    {
      name: 'Decision',
      dataKey: 'decision'
    },
    {
      name: 'Amount Approved',
      dataKey: 'amountApproved',
      type: ColumnTypes.CURRENCY
    }
  ];
  dataSource: PagedResponseModel<FundingRequest> = {} as PagedResponseModel<FundingRequest>;
  isLoading: boolean = false;
  actionItems: IActions[] = [
    {
      displayName: 'View',
      actionType: ActionButtonType.VIEW
    }
  ];

  constructor(private frService: FundingRequestService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.isLoading = true;
    this.frService.getFundingRequests().subscribe((response: PagedResponseModel<FundingRequest>) => {
      this.isLoading = false;
      this.dataSource = response;
    })
  }

  onButtonClicked($event: IActionEvent<FundingRequest>) {
    if($event.type === ActionButtonType.VIEW) {
      this.dialog.open(FundingRequestPopupComponent, {
        data: {
          id: $event.data.id,
          fromOrgView: false
        },
        maxWidth: '40%',
        minWidth: '30%'
      });
    }
  }

  onTableEvent($event: any) {
    if($event.type === 'PageChange') {
      this.isLoading = true;
      this.frService.getFundingRequests({page: $event.data.pageIndex + 1, rpp: 10}).subscribe((response: PagedResponseModel<FundingRequest>) => {
        this.isLoading = false;
        this.dataSource = response;
      })
    }
  }
}
