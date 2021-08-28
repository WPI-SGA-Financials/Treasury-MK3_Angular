import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IReallocation } from '../../../types/ireallocation.interface';
import { IActiveSort, ITableColumn } from '../../../types/itable-column.interface';

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

  constructor(private http: HttpService) {}

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
        isSortable: true
      },
      {
        name: 'Fiscal Year',
        dataKey: 'fiscalYear'
      },
      {
        name: 'Allocation Amount',
        dataKey: 'allocationAmount'
      },
      {
        name: 'Decision',
        dataKey: 'decision'
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
