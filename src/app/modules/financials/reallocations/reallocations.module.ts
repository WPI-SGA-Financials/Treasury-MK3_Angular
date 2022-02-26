import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReallocationsRoutingModule } from './reallocations-routing.module';
import { ReallocationsListComponent } from './reallocations-list/reallocations-list.component';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';

@NgModule({
  declarations: [ReallocationsListComponent],
  imports: [CommonModule, ReallocationsRoutingModule, SharedFiltersModule, ReusableTableModule]
})
export class ReallocationsModule {}
