import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpService} from "../../../services/http.service";
import {Path_Api} from "../../../types/path.enum";

export interface Club {
  name: string;
  classification: string;
  typeOfClub: string;
  accountNumber: string | null;
  acronym: string | null;
  inactive: boolean;
  timestamp: string
}

@Component({
  selector: 'app-clubs-table',
  templateUrl: './clubs-table.component.html',
  styleUrls: ['./clubs-table.component.scss']
})
export class ClubsTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>([])

  displayedColumns: string[] = ['name', 'classification', 'typeOfClub', 'acronym', "inactive"];

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getRequest(Path_Api.ORGANIZATIONS).subscribe((response:Club[]) => {
      this.setData(response)
    })
  }

  setData(data:Club[]): void {
    this.dataSource.data = data
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClickedRow(row: any) {
    console.log(row)
  }
}
