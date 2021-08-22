import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { IReallocation } from '../../../types/ireallocation.interface';

@Component({
  selector: 'app-reallocations',
  templateUrl: './reallocations.component.html',
  styleUrls: ['./reallocations.component.scss']
})
export class ReallocationsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nameOfClub', 'hearingDate', 'fiscalYear', 'allocationAmount', 'decision', 'amountApproved'];
  dataSource = new MatTableDataSource<IReallocation>([]);

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getRequest(Path_Api.REALLOCATIONS).subscribe((response: IReallocation[]) => {
      this.setData(response);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClickedRow(row: any) {
    console.log(row);
  }

  private setData(data: IReallocation[]) {
    console.log(data);
    this.dataSource.data = data;
  }
}
