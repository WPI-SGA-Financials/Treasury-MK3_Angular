import { Component, OnInit } from '@angular/core';
import { Reallocation } from '../../../types/reallocation.model';
import { ReallocationRequestPopupComponent } from '../../../components/popups/reallocation-request-popup/reallocation-request-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ReallocationRequestService } from '../../../services/api-services/reallocation-request.service';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActionEvent, IActions, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../../../components/tables/types/table-enums';
import { IFilter } from '../../../components/filters/types/filter';

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
      isSortable: false
    },
    {
      name: 'Hearing Date',
      dataKey: 'hearingDate',
      isSortable: false,
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
  actionItems: IActions[] = [
    {
      displayName: 'View',
      actionType: ActionButtonType.VIEW
    }
  ];

  constructor(private reallocService: ReallocationRequestService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.isLoading = true;
    this.reallocService.getReallocations({page: 1, rpp: 9}).subscribe((response: PagedResponseModel<Reallocation>) => {
      this.isLoading = false;
      this.dataSource = response;
    })
  }

  onButtonClicked($event: IActionEvent<Reallocation>) {
    if($event.type === ActionButtonType.VIEW) {
      this.dialog.open(ReallocationRequestPopupComponent, {
        data: {
          id: $event.data.id,
          fromOrgView: false
        },
        maxWidth: '40%',
        minWidth: '30%'
      });
    }
  }

  onTableEvent($event: any) {
    if($event.type === 'PageChange') {
      this.isLoading = true;
      this.reallocService.getReallocations({page: $event.data.pageIndex + 1, rpp: 9}).subscribe((response: PagedResponseModel<Reallocation>) => {
        this.isLoading = false;
        this.dataSource = response;
      })
    }
  }

  onSearch($event: IFilter) {
    // TODO Do something with search

    console.log($event);
  }
}
