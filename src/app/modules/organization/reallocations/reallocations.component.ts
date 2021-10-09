import { Component, OnInit } from '@angular/core';
import { ColumnTypes, IActiveSort, ITableColumn } from '../../../types/itable-column.interface';
import { HttpService } from '../../../services/http.service';
import { OrgDataService } from '../../../services/org-data.service';
import { Path_Api } from '../../../types/path.enum';
import { IReallocation } from '../../../types/ireallocation.interface';
import { ReallocationRequestPopupComponent } from '../../../components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-org-reallocations',
  templateUrl: './reallocations.component.html',
  styleUrls: ['./reallocations.component.scss']
})
export class ReallocationsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IReallocation[] = [];
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
    this.http.getRequest(`${Path_Api.ORGANIZATION}/${this._clubName}/reallocs`).subscribe((response: IReallocation[]) => {
      this.setData(response);
    });
  }

  private setData(data: IReallocation[]) {
    console.log(data);
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
        name: 'Allocation Amount',
        dataKey: 'allocationAmount',
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
    this.dialog.open(ReallocationRequestPopupComponent, {
      data: {
        id: row.id,
        fromOrgView: true
      },
      maxWidth: '40%',
      minWidth: '30%'
    });
  }
}
