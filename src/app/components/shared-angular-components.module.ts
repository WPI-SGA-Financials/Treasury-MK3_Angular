import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialComponentsModule } from './shared-material-components.module';
import { PopupsModule } from './popups/popups.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialComponentsModule,
    PopupsModule
  ]
})
export class SharedAngularComponentsModule { }
