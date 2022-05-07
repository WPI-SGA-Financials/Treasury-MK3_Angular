import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';
import { SharedAngularComponentsModule } from '@treasury-components/shared-angular-components.module';
import { CatNavModule } from '@treasury-components/cat-nav/cat-nav.module';
import { FundingRequestsListComponent } from './funding-requests-list/funding-requests-list.component';
import { FundingRequestsRoutingModule } from './funding-requests-routing.module';

@NgModule({
    declarations: [FundingRequestsListComponent],
    imports: [
        CommonModule,
        FundingRequestsRoutingModule,
        ReusableTableModule,
        SharedFiltersModule,
        SharedAngularComponentsModule,
        CatNavModule,
    ],
})
export class FundingRequestsModule {}
