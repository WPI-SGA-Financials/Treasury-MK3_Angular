import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IClub } from '../../../types/iclub.interface';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubs-table',
  templateUrl: './clubs-table.component.html',
  styleUrls: ['./clubs-table.component.scss']
})
export class ClubsTableComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IClub[] = [];

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.http.getRequest(Path_Api.ORGANIZATIONS).subscribe((response: IClub[]) => {
      this.setData(response);
    });
  }

  private setData(data: IClub[]) {
    this.dataSource = data;
  }

  private initializeColumns() {
    this.displayedColumns = [
      {
        name: 'Name of Club',
        dataKey: 'name',
        isSortable: true
      },
      {
        name: 'Classification',
        dataKey: 'classification'
      },
      {
        name: 'Type of Club',
        dataKey: 'typeOfClub'
      },
      {
        name: 'Club Acronym',
        dataKey: 'acronym'
      },
      {
        name: 'Active?',
        dataKey: 'inactive',
        type: ColumnTypes.INACTIVE
      },
      {
        name: 'Last Modified',
        dataKey: 'timestamp',
        type: ColumnTypes.DATE
      }
    ];
  }

  onClickedRow(row: IClub) {
    this.router.navigate([`${Path_Api.ORGANIZATION}/${row.name}`]);
  }
}
