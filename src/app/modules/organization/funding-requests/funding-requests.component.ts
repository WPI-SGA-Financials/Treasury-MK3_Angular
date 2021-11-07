import { Component, OnInit } from '@angular/core';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { OrgDataService } from '../../../services/org-data.service';
import { FundingRequest } from '../../../types/funding-request.model';
import { FundingRequestPopupComponent } from '../../../components/popups/funding-request-popup/funding-request-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { FundingRequestService } from '../../../services/api-services/funding-request.service';
import { ResponseModel } from '../../../types/response.model';

@Component({
  selector: 'app-org-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: FundingRequest[] = [];
  private _clubName: string = '';

  constructor(private frService: FundingRequestService, private orgDataService: OrgDataService, private dialog: MatDialog) {
    this._clubName = this.orgDataService.getOrgName();
  }

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.frService.getOrganizationFundingRequests(this._clubName).subscribe((response: ResponseModel<FundingRequest[]>) => {
      this.setData(response.data)
    })
  }

  private setData(data: FundingRequest[]) {
    this.dataSource = data;
  }

  private initializeColumns() {
    this.displayedColumns = [
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
        name: 'Description',
        dataKey: 'description'
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
  }

  onClickedRow(row: any) {
    this.dialog.open(FundingRequestPopupComponent, {
      data: {
        id: row.id,
        fromOrgView: true
      },
      maxWidth: '40%',
      minWidth: '30%'
    });
  }
}
