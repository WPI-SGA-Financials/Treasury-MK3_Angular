import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {SharedAngularComponentsModule} from "../../components/shared-angular-components.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidenavComponent
  ],
    imports: [
        CommonModule,
        SharedAngularComponentsModule,
        RouterModule
    ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
