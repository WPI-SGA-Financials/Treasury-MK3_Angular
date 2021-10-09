import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { HttpService } from '../../../services/http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Path, Path_Api } from '../../../types/path.enum';
import { IExtendedReallocation } from '../../../types/ireallocation.interface';

@Component({
  selector: 'app-reallocation-request-popup',
  templateUrl: './reallocation-request-popup.component.html',
  styleUrls: ['./reallocation-request-popup.component.scss']
})
export class ReallocationRequestPopupComponent implements OnInit {
  extendedReallocation: IExtendedReallocation | null = null;
  @ViewChild(MatAccordion) accordion: any;
  public routerPath: string = '';

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<ReallocationRequestPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public injectedData: {
      id: number;
      fromOrgView: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.http.getRequest(`${Path_Api.SPECIFIC_REALLOC}/${this.injectedData.id}`).subscribe((res: IExtendedReallocation) => {
      this.extendedReallocation = res;
      this.routerPath = Path.ORGANIZATION + '/' + this.extendedReallocation?.nameOfClub + '/reallocations';
    });
  }
}
