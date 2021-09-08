import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { IBudget } from '../../../types/ibudget.interface';
import { Path_Api } from '../../../types/path.enum';
import { ColumnTypes, ITableColumn } from '../../../types/itable-column.interface';
import { MatDialog } from '@angular/material/dialog';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IBudget[] = [];

  constructor(private http: HttpService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeData();
    this.initializeColumns();
  }

  private initializeData() {
    this.http.getRequest(Path_Api.BUDGETS).subscribe((response: IBudget[]) => {
      this.setData(response);
    });
  }

  private setData(data: IBudget[]) {
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
        id: row.id
      },
      maxWidth: '40%' });
  }
}
