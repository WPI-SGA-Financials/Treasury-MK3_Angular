import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivizComponent } from './fiviz.component';
import {CatNavModule} from "../cat-nav/cat-nav.module";
import {FivizRoutingModule} from "./fiviz-routing.module";



@NgModule({
  declarations: [
    FivizComponent
  ],
    imports: [
        CommonModule,
        FivizRoutingModule,
        CatNavModule
    ]
})
export class FivizModule { }
