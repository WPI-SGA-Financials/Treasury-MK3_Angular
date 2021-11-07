import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import { ClubNameModule } from '../../components/filters/club-name/club-name.module';
import { ClubClassificationModule } from '../../components/filters/club-classification/club-classification.module';
import { ClubTypeModule } from '../../components/filters/club-type/club-type.module';
import { ClubInactiveModule } from '../../components/filters/club-inactive/club-inactive.module';
import { CatNavModule } from '../../components/cat-nav/cat-nav.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';

@NgModule({
  declarations: [ClubsComponent, FilterMenuComponent, ClubsTableComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    SharedMaterialComponentsModule,
    ClubNameModule,
    ClubClassificationModule,
    ClubTypeModule,
    ClubInactiveModule,
    CatNavModule,
    ReusableTableModule
  ]
})
export class ClubsModule {}
