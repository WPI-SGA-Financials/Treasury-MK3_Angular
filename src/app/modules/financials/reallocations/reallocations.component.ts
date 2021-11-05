import { Component, OnInit } from '@angular/core';
import { Reallocation } from '../../../types/reallocation.model';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { ReallocationRequestPopupComponent } from '../../../components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ReallocationRequestService } from '../../../services/api-services/reallocation-request.service';
import { PagedResponseModel } from '../../../types/paged-response.model';

@Component({
  selector: 'app-reallocations',
  templateUrl: './reallocations.component.html',
  styleUrls: ['./reallocations.component.scss']
})
export class ReallocationsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: Reallocation[] = [];

  constructor(private reallocService: ReallocationRequestService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.reallocService.getReallocations().subscribe((response: PagedResponseModel<Reallocation>) => {
      this.setData(response.data)
    })
  }

  private setData(data: Reallocation[]) {
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
