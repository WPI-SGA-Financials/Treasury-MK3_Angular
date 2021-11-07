import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialsComponent } from './financials.component';
import { CatNavModule } from '../../components/cat-nav/cat-nav.module';
import { FinancialsRoutingModule } from './financials-routing.module';
import { FinNavComponent } from './fin-nav/fin-nav.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';
import { ReallocationsComponent } from './reallocations/reallocations.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ClubNameModule } from '../../components/filters/club-name/club-name.module';
import { FiscalClassModule } from '../../components/filters/fiscal-class/fiscal-class.module';
import { FiscalYearModule } from '../../components/filters/fiscal-year/fiscal-year.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';

@NgModule({
  declarations: [
    FinancialsComponent,
    FinNavComponent,
    BudgetsComponent,
    FundingRequestsComponent,
    ReallocationsComponent,
    FilterMenuComponent
  ],
  imports: [
    CommonModule,
    FinancialsRoutingModule,
    CatNavModule,
    SharedMaterialComponentsModule,
    ClubNameModule,
    FiscalClassModule,
    FiscalYearModule,
    ReusableTableModule
  ]
})
export class FinancialsModule {}
