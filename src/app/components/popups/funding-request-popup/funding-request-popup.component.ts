import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { HttpService } from '../../../services/http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Path, Path_Api } from '../../../types/path.enum';
import { IExtendedFundingRequest } from '../../../types/ifunding-request.interface';

@Component({
  selector: 'app-funding-request-popup',
  templateUrl: './funding-request-popup.component.html',
  styleUrls: ['./funding-request-popup.component.scss']
})
export class FundingRequestPopupComponent implements OnInit {
  extendedFundingRequest: IExtendedFundingRequest | null = null;
  @ViewChild(MatAccordion) accordion: any;
  public routerPath: string = '';

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<FundingRequestPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public injectedData: {
      id: number;
      fromOrgView: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.http.getRequest(`${Path_Api.SPECIFIC_FR}/${this.injectedData.id}`).subscribe((res: IExtendedFundingRequest) => {
      this.extendedFundingRequest = res;
      this.routerPath = Path.ORGANIZATION + '/' + this.extendedFundingRequest?.nameOfClub + '/funding-requests';
    });
  }
}
