import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import {ClubsComponent} from "./clubs.component";
import {SharedMaterialComponentsModule} from "../shared-material-components.module";


@NgModule({
  declarations: [ClubsComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    SharedMaterialComponentsModule
  ]
})
export class ClubsModule { }
