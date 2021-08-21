import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubInactiveComponent } from './club-inactive.component';



@NgModule({
    declarations: [
        ClubInactiveComponent
    ],
    exports: [
        ClubInactiveComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClubInactiveModule { }
