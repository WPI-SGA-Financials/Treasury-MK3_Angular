import { Component, OnInit } from '@angular/core';
import { ColumnTypes, IActiveSort, ITableColumn } from '../../../types/itable-column.interface';
import { IBudget } from '../../../types/ibudget.interface';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { OrgDataService } from '../../../services/org-data.service';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-org-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IBudget[] = [];
  private _clubName: string = '';

  activeSort: IActiveSort = {
    isActive: false,
    dataKey: 'fiscalYear',
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
    this.http.getRequest(`${Path_Api.ORGANIZATION}/${this._clubName}/budgets`).subscribe((response: IBudget[]) => {
      this.setData(response);
    });
  }

  private setData(data: IBudget[]) {
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
