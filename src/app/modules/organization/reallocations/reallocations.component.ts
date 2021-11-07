import { Component, OnInit } from '@angular/core';
import { ColumnTypes, IActiveSort, ITableColumn } from '../../../types/itable-column.interface';
import { OrgDataService } from '../../../services/org-data.service';
import { Reallocation } from '../../../types/reallocation.model';
import { ReallocationRequestPopupComponent } from '../../../components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ReallocationRequestService } from '../../../services/api-services/reallocation-request.service';
import { ResponseModel } from '../../../types/response.model';

@Component({
  selector: 'app-org-reallocations',
  templateUrl: './reallocations.component.html',
  styleUrls: ['./reallocations.component.scss']
})
export class ReallocationsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: Reallocation[] = [];
  private _clubName: string = '';

  activeSort: IActiveSort = {
    isActive: false,
    dataKey: 'hearingDate',
    direction: 'desc'
  };

  constructor(private reallocService: ReallocationRequestService, private orgDataService: OrgDataService, private dialog: MatDialog) {
    this._clubName = this.orgDataService.getOrgName();
  }

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.reallocService.getOrganizationReallocationRequests(this._clubName).subscribe((response: ResponseModel<Reallocation[]>) => {
      this.setData(response.data)
    })
  }

  private setData(data: Reallocation[]) {
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
