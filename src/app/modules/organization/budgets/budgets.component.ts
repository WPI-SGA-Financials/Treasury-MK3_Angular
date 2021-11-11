import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../types/budget.model';
import { OrgDataService } from '../../../services/org-data.service';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetService } from '../../../services/api-services/budget.service';
import { ResponseModel } from '../../../types/response.model';
import { IActiveSort, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ColumnTypes } from '../../../components/tables/types/table-enums';

@Component({
  selector: 'app-org-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: Budget[] = [];
  private _clubName: string = '';

  activeSort: IActiveSort = {
    dataKey: 'fiscalYear',
    direction: 'desc'
  };

  constructor(private budgetService: BudgetService, private orgDataService: OrgDataService, private dialog: MatDialog) {
    this._clubName = this.orgDataService.getOrgName();
  }

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.budgetService.getOrganizationBudgets(this._clubName).subscribe((response: ResponseModel<Budget[]>) => {
      this.setData(response.data)
    })
  }

  private setData(data: Budget[]) {
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
        fromOrgView: true
      },
      maxWidth: '40%',
      minWidth: '30%'
    });
  }
}
