import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';
import { BudgetDetailedComponent } from './budget-detailed/budget-detailed.component';
import { CatNavModule } from '@treasury-components/cat-nav/cat-nav.module';
import { SharedAngularComponentsModule } from '@treasury-components/shared-angular-components.module';
import { SharedMaterialComponentsModule } from '@treasury-components/shared-material-components.module';

@NgModule({
  declarations: [BudgetsListComponent, BudgetDetailedComponent],
  imports: [
    CommonModule,
    BudgetsRoutingModule,
    ReusableTableModule,
    SharedFiltersModule,
    CatNavModule,
    SharedAngularComponentsModule,
    SharedMaterialComponentsModule
  ]
})
export class BudgetsModule {}
