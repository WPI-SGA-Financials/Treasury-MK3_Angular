import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../types/budget.model';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { MatDialog } from '@angular/material/dialog';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';
import { BudgetService } from '../../../services/api-services/budget.service';
import { PagedResponseModel } from '../../../types/paged-response.model';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: Budget[] = [];

  constructor(private budgetService: BudgetService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.budgetService.getBudgets().subscribe((response: PagedResponseModel<Budget>) => {
      this.setData(response.data)
    })
  }

  private setData(data: Budget[]) {
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
}
