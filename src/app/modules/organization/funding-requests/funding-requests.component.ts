import { Component, OnInit } from '@angular/core';
import { ColumnTypes, IActiveSort, ITableColumn } from '../../../types/itable-column.interface';
import { HttpService } from '../../../services/http.service';
import { OrgDataService } from '../../../services/org-data.service';
import { Path_Api } from '../../../types/path.enum';
import { IFundingRequest } from '../../../types/ifunding-request.interface';
import { FundingRequestPopupComponent } from '../../../components/popups/funding-request-popup/funding-request-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-org-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IFundingRequest[] = [];
  private _clubName: string = '';

  activeSort: IActiveSort = {
    isActive: false,
    dataKey: 'hearingDate',
    direction: 'desc'
  };

  constructor(private http: HttpService, private orgDataService: OrgDataService, private dialog: MatDialog) {
    this._clubName = this.orgDataService.getOrgName();
  }

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.http.getRequest(`${Path_Api.ORGANIZATION}/${this._clubName}/fr`).subscribe((response: IFundingRequest[]) => {
      this.setData(response);
    });
  }

  private setData(data: IFundingRequest[]) {
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
