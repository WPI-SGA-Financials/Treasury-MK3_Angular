import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Path } from '../../../types/path.enum';
import { ExtendedReallocation } from '../../../types/reallocation.model';
import { ReallocationRequestService } from '../../../services/api-services/reallocation-request.service';
import { ResponseModel } from '../../../types/response.model';

@Component({
  selector: 'app-reallocation-request-popup',
  templateUrl: './reallocation-request-popup.component.html',
  styleUrls: ['./reallocation-request-popup.component.scss']
})
export class ReallocationRequestPopupComponent implements OnInit {
  extendedReallocation: ExtendedReallocation | null = null;
  @ViewChild(MatAccordion) accordion: any;
  public routerPath: string = '';

  constructor(
    private reallocService: ReallocationRequestService,
    public dialogRef: MatDialogRef<ReallocationRequestPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public injectedData: {
      id: number;
      fromOrgView: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.reallocService.getReallocationRequest(this.injectedData.id).subscribe((res: ResponseModel<ExtendedReallocation>) => {
      this.extendedReallocation = res.data;
      this.routerPath = `${Path.ORGANIZATIONS}/${this.extendedReallocation?.nameOfClub}/reallocations`;
    });
  }
}
