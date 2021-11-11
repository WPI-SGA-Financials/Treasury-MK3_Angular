import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../types/budget.model';
import { MatDialog } from '@angular/material/dialog';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';
import { BudgetService } from '../../../services/api-services/budget.service';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ColumnTypes } from '../../../components/tables/types/table-enums';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [
    {
      name: 'Name of Club',
      dataKey: 'nameOfClub',
    },
    {
      name: 'Fiscal Year',
      dataKey: 'fiscalYear'
    },
    {
      name: 'Number of Items',
      dataKey: 'numOfItems'
    },
    {
      name: 'Amount Requested',
      dataKey: 'amountRequested',
      type: ColumnTypes.CURRENCY
    },
    {
      name: 'Amount Proposed',
      dataKey: 'amountProposed',
      type: ColumnTypes.CURRENCY
    },
    {
      name: 'Amount Approved',
      dataKey: 'amountApproved',
      type: ColumnTypes.CURRENCY
    }
  ];
  dataSource: PagedResponseModel<Budget> = {} as PagedResponseModel<Budget>
  isLoading: boolean = false;

  constructor(private budgetService: BudgetService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.budgetService.getBudgets().subscribe((response: PagedResponseModel<Budget>) => {
      this.dataSource = response
    })
  }

  onClickedRow(row: any) {
    this.dialog.open(BudgetPopupComponent, {
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
      this.budgetService.getBudgets({page: $event.data.pageIndex + 1, rpp: 10}).subscribe((response: PagedResponseModel<Budget>) => {
        this.isLoading = false;
        this.dataSource = response;
      })
    }
  }
}
