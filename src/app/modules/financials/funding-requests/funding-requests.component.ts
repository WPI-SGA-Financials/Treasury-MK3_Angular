import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IFundingRequest } from '../../../types/ifunding-request.interface';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';

@Component({
  selector: 'app-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IFundingRequest[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.http.getRequest(Path_Api.FUNDINGREQUESTS).subscribe((response: IFundingRequest[]) => {
      this.setData(response);
    });
  }

  private setData(data: IFundingRequest[]) {
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
        name: 'Hearing Date',
        dataKey: 'hearingDate',
        type: ColumnTypes.DATE
      },
      {
        name: 'Fiscal Year',
        dataKey: 'fiscalYear'
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
    console.log(row);
  }
}
