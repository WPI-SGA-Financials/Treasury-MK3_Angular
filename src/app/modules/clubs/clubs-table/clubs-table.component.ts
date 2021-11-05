import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/api-services/organization.service';
import { Path_Api } from '../../../types/path.enum';
import { Organization } from '../../../types/organization.model';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { Router } from '@angular/router';
import { PagedResponseModel } from '../../../types/paged-response.model';

@Component({
  selector: 'app-clubs-table',
  templateUrl: './clubs-table.component.html',
  styleUrls: ['./clubs-table.component.scss']
})
export class ClubsTableComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: Organization[] = [];

  constructor(private router: Router, private orgService: OrganizationService) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.orgService.getOrganizations().subscribe((response :PagedResponseModel<Organization>) => {
      this.setData(response.data)
    })

    /*this.http.getRequest(Path_Api.ORGANIZATIONS).subscribe((response: IOrganization[]) => {
      this.setData(response);
    });*/
  }

  private setData(data: Organization[]) {
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

  onClickedRow(row: Organization) {
    this.router.navigate([`${Path_Api.ORGANIZATION}/${row.nameOfClub}`]);
  }
}
