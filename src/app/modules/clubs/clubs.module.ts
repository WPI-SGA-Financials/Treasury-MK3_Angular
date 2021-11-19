import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import { CatNavModule } from '../../components/cat-nav/cat-nav.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';
import { SharedFiltersModule } from '../../components/filters/shared-filters.module';

@NgModule({
  declarations: [ClubsComponent, ClubsTableComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    SharedMaterialComponentsModule,
    CatNavModule,
    ReusableTableModule,
    SharedFiltersModule
  ]
})
export class ClubsModule {}
