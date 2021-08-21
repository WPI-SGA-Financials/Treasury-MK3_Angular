import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {IBudget} from "../../../types/ibudget.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Path_Api} from "../../../types/path.enum";

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["nameOfClub", "fiscalYear", "numOfItems", "amountRequested", "amountProposed", "amountApproved"];
  dataSource = new MatTableDataSource<IBudget>([])

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getRequest(Path_Api.BUDGETS).subscribe((response:IBudget[]) => {
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

  private setData(data: IBudget[]) {
    console.log(data)
    this.dataSource.data = data
  }
}
