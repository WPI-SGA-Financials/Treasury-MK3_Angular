import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialComponentsModule } from './shared-material-components.module';
import { PopupsModule } from './popups/popups.module';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ButtonGroupComponent],
  imports: [
    CommonModule,
    SharedMaterialComponentsModule,
    PopupsModule,
    RouterModule
  ],
  exports: [ButtonGroupComponent]
})
export class SharedAngularComponentsModule { }
