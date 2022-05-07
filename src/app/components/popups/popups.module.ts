import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPopupComponent } from './budget-popup/budget-popup.component';
import { FundingRequestPopupComponent } from './funding-request-popup/funding-request-popup.component';
import { ReusableHeaderComponent } from './reusable-header/reusable-header.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { ReallocationRequestPopupComponent } from './reallocation-request-popup/reallocation-request-popup.component';

@NgModule({
    declarations: [
        BudgetPopupComponent,
        FundingRequestPopupComponent,
        ReusableHeaderComponent,
        MeetingDetailsComponent,
        ReallocationRequestPopupComponent,
    ],
    imports: [CommonModule, SharedMaterialComponentsModule],
})
export class PopupsModule {}
