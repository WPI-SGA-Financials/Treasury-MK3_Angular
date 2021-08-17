import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Path_Api} from "../../types/path.enum";
import {MatTableDataSource} from "@angular/material/table";

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
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<any>([])

  displayedColumns: string[] = ['name', 'classification', 'typeOfClub', 'acronym', "inactive"];

  @ViewChild('page') paginator: any;

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getRequest(Path_Api.ORGANIZATIONS).subscribe((response) => {
      this.dataSource.data = response
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
