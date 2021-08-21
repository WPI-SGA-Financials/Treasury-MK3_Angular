import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatNavComponent } from './cat-nav.component';
import {SharedMaterialComponentsModule} from "../shared-material-components.module";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        CatNavComponent
    ],
    exports: [
        CatNavComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialComponentsModule,
        RouterModule
    ]
})
export class CatNavModule { }
