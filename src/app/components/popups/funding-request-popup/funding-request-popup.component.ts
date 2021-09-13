import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { HttpService } from '../../../services/http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Path, Path_Api } from '../../../types/path.enum';
import { IFundingRequest } from '../../../types/ifunding-request.interface';

interface IExtendedFR extends IFundingRequest{

}

@Component({
  selector: 'app-funding-request-popup',
  templateUrl: './funding-request-popup.component.html',
  styleUrls: ['./funding-request-popup.component.scss']
})
export class FundingRequestPopupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
