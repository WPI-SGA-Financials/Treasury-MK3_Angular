import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import {ClubsComponent} from "./clubs.component";
import {SharedMaterialComponentsModule} from "../shared-material-components.module";
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import {ClubNameModule} from "../filters/club-name/club-name.module";


@NgModule({
  declarations: [ClubsComponent, FilterMenuComponent, ClubsTableComponent],
    imports: [
        CommonModule,
        ClubsRoutingModule,
        SharedMaterialComponentsModule,
        ClubNameModule
    ]
})
export class ClubsModule { }
