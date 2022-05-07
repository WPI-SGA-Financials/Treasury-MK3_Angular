import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Path } from '../../../types/path.enum';
import { ExtendedFundingRequest } from '../../../types/funding-request.model';
import { FundingRequestService } from '../../../services/api-services/funding-request.service';
import { ResponseModel } from '../../../types/response.model';

@Component({
    selector: 'app-funding-request-popup',
    templateUrl: './funding-request-popup.component.html',
    styleUrls: ['./funding-request-popup.component.scss'],
})
export class FundingRequestPopupComponent implements OnInit {
    extendedFundingRequest: ExtendedFundingRequest | null = null;

    @ViewChild(MatAccordion) accordion: any;

    public routerPath: string = '';

    constructor(
        private frService: FundingRequestService,
        public dialogRef: MatDialogRef<FundingRequestPopupComponent>,
        @Inject(MAT_DIALOG_DATA)
        public injectedData: {
            id: number;
            fromOrgView: boolean;
        },
    ) {}

    ngOnInit(): void {
        this.frService
            .getFundingRequest(this.injectedData.id)
            .subscribe((response: ResponseModel<ExtendedFundingRequest>) => {
                this.extendedFundingRequest = response.data;
                this.routerPath = `${Path.ORGANIZATIONS}/${this.extendedFundingRequest?.nameOfClub}/funding-requests`;
            });
    }
}
