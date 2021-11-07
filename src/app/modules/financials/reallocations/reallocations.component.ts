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
  displayedColumns: ITableColumn[] = [
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
  dataSource: PagedResponseModel<Reallocation> = {} as PagedResponseModel<Reallocation>
  isLoading: boolean = false;

  constructor(private reallocService: ReallocationRequestService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.reallocService.getReallocations().subscribe((response: PagedResponseModel<Reallocation>) => {
      this.dataSource = response;
    })
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

  onTableEvent($event: any) {
    if($event.type === 'PageChange') {
      this.isLoading = true;
      this.reallocService.getReallocations({page: $event.data.pageIndex + 1, rpp: 10}).subscribe((response: PagedResponseModel<Reallocation>) => {
        this.isLoading = false;
        this.dataSource = response;
      })
    }
  }
}
