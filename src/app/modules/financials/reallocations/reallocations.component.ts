import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IReallocation } from '../../../types/ireallocation.interface';
import { ColumnTypes, IActiveSort, ITableColumn } from '../../../types/itable-column.interface';
import { ReallocationRequestPopupComponent } from '../../../components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reallocations',
  templateUrl: './reallocations.component.html',
  styleUrls: ['./reallocations.component.scss']
})
export class ReallocationsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IReallocation[] = [];

  activeSort: IActiveSort = {
    isActive: false,
    dataKey: 'hearingDate',
    direction: 'desc'
  };

  constructor(private http: HttpService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.http.getRequest(Path_Api.REALLOCATIONS).subscribe((response: IReallocation[]) => {
      this.setData(response);
    });
  }

  private setData(data: IReallocation[]) {
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
        isSortable: true,
        type: ColumnTypes.DATE
      },
      {
        name: 'Fiscal Year',
        dataKey: 'fiscalYear'
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
        fromOrgView: false
      },
      maxWidth: '40%',
      minWidth: '30%'
    });
  }
}
