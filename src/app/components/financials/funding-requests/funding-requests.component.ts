import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpService} from "../../../services/http.service";
import {Path_Api} from "../../../types/path.enum";
import {IFundingRequest} from "../../../types/ifunding-request.interface";

@Component({
  selector: 'app-funding-requests',
  templateUrl: './funding-requests.component.html',
  styleUrls: ['./funding-requests.component.scss']
})
export class FundingRequestsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ["nameOfClub", "hearingDate", "fiscalYear", "amountRequested", "decision", "amountApproved"];
  dataSource = new MatTableDataSource<IFundingRequest>([])

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getRequest(Path_Api.FUNDINGREQUESTS).subscribe((response: IFundingRequest[]) => {
      this.setData(response)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClickedRow(row: any) {
    console.log(row)
  }

  private setData(data: IFundingRequest[]) {
    console.log(data)
    this.dataSource.data = data
  }

}
