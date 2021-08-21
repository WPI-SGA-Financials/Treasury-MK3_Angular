import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import {ClubsComponent} from "./clubs.component";
import {SharedMaterialComponentsModule} from "../shared-material-components.module";
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import {ClubNameModule} from "../filters/club-name/club-name.module";
import {ClubClassificationModule} from "../filters/club-classification/club-classification.module";
import {ClubTypeModule} from "../filters/club-type/club-type.module";
import {ClubInactiveModule} from "../filters/club-inactive/club-inactive.module";
import {CatNavModule} from "../cat-nav/cat-nav.module";


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
        CatNavModule
    ]
})
export class ClubsModule { }
