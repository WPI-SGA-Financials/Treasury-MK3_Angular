import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { IBudget } from '../../../types/ibudget.interface';
import { Path_Api } from '../../../types/path.enum';
import { ITableColumn } from '../../../types/itable-column.interface';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [];
  dataSource: IBudget[] = [];

  constructor(private http: HttpService) {}

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
        dataKey: 'amountRequested'
      },
      {
        name: 'Amount Proposed',
        dataKey: 'amountProposed'
      },
      {
        name: 'Amount Approved',
        dataKey: 'amountApproved'
      }
    ];
  }

  onClickedRow(row: any) {
    console.log(row);
  }
}
