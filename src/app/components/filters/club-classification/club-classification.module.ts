import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubClassificationComponent } from './club-classification.component';



@NgModule({
    declarations: [
        ClubClassificationComponent
    ],
    exports: [
        ClubClassificationComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClubClassificationModule { }
