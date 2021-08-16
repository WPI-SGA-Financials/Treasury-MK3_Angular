import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {SharedMaterialComponentsModule} from "../../components/shared-material-components.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidenavComponent
  ],
    imports: [
        CommonModule,
        SharedMaterialComponentsModule,
        RouterModule
    ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
