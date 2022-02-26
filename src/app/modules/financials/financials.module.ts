import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialsComponent } from './financials.component';
import { CatNavModule } from '../../components/cat-nav/cat-nav.module';
import { FinancialsRoutingModule } from './financials-routing.module';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';
import { SharedAngularComponentsModule } from '../../components/shared-angular-components.module';
import { SharedFiltersModule } from '../../components/filters/shared-filters.module';

@NgModule({
  declarations: [FinancialsComponent, BudgetsComponent, FundingRequestsComponent],
  imports: [
    CommonModule,
    FinancialsRoutingModule,
    CatNavModule,
    SharedMaterialComponentsModule,
    ReusableTableModule,
    SharedAngularComponentsModule,
    SharedFiltersModule
  ]
})
export class FinancialsModule {}
