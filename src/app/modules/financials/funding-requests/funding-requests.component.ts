import { Component, OnInit } from '@angular/core';
import { FundingRequest } from '../../../types/funding-request.model';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { MatDialog } from '@angular/material/dialog';
import { FundingRequestPopupComponent } from '../../../components/popups/funding-request-popup/funding-request-popup.component';
import { FundingRequestService } from '../../../services/api-services/funding-request.service';
import { PagedResponseModel } from '../../../types/paged-response.model';

@Component({
  selector: 'app-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: FundingRequest[] = [];

  constructor(private frService: FundingRequestService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.frService.getFundingRequests().subscribe((response: PagedResponseModel<FundingRequest>) => {
      this.setData(response.data)
    })
  }

  private setData(data: FundingRequest[]) {
    this.dataSource = data;
  }

  private initializeColumns() {
    this.displayedColumns = [
      {
        name: 'Name of Club',
        dataKey: 'nameOfClub',
        isSortable: true
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
  }

  onClickedRow(row: any) {
    this.dialog.open(FundingRequestPopupComponent, {
      data: {
        id: row.id,
        fromOrgView: false
      },
      maxWidth: '40%',
      minWidth: '30%'
    });
  }
}
