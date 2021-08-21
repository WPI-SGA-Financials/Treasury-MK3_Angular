import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiscalClassComponent } from './fiscal-class.component';



@NgModule({
    declarations: [
        FiscalClassComponent
    ],
    exports: [
        FiscalClassComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FiscalClassModule { }
