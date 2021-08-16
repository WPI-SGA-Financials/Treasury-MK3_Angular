import { NgModule } from '@angular/core';

import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";


const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
]


@NgModule({
  imports: material,
  exports: material
})

export class SharedMaterialComponentsModule { }
