import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';

@NgModule({
  declarations: [BudgetsListComponent],
  imports: [CommonModule, BudgetsRoutingModule, ReusableTableModule, SharedFiltersModule]
})
export class BudgetsModule {}
