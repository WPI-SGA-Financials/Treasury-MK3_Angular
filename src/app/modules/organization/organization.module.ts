import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { InfoComponent } from './info/info.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';
import { ReallocationsComponent } from './reallocations/reallocations.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';
import { SharedAngularComponentsModule } from '../../components/shared-angular-components.module';

@NgModule({
  declarations: [OrganizationComponent, InfoComponent, BudgetsComponent, FundingRequestsComponent, ReallocationsComponent],
  exports: [OrganizationComponent],
  imports: [CommonModule, OrganizationRoutingModule, SharedMaterialComponentsModule, ReusableTableModule, SharedAngularComponentsModule]
})
export class OrganizationModule {}
