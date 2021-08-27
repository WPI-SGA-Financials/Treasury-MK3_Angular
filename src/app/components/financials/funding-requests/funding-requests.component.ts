import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IFundingRequest } from '../../../types/ifunding-request.interface';
import { ITableColumn } from '../../../types/itable-column.interface';

@Component({
  selector: 'app-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit /*, AfterViewInit*/ {
  displayedColumns: ITableColumn[] = []; /*['nameOfClub', 'hearingDate', 'fiscalYear', 'amountRequested', 'decision', 'amountApproved'];*/
  // dataSource = new MatTableDataSource<IFundingRequest>([]);
  dataSource: IFundingRequest[] = [];

  /*  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;*/

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

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  private setData(data: IFundingRequest[]) {
    console.log(data);
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
        dataKey: 'hearingDate'
      },
      {
        name: 'Fiscal Year',
        dataKey: 'fiscalYear'
      },
      {
        name: 'Amount Requested',
        dataKey: 'amountRequested'
      },
      {
        name: 'Decision',
        dataKey: 'decision'
      },
      {
        name: 'Amount Approved',
        dataKey: 'amountApproved'
      }
    ];
  }

  onClickedRow(row: any) {
    console.log(row);
  }
}
