import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRequestsRoutingModule } from './funding-requests-routing.module';
import { FundingRequestsListComponent } from './funding-requests-list/funding-requests-list.component';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';

@NgModule({
  declarations: [FundingRequestsListComponent],
  imports: [CommonModule, FundingRequestsRoutingModule, ReusableTableModule, SharedFiltersModule]
})
export class FundingRequestsModule {}
