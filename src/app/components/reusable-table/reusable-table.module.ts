import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';

@NgModule({
  declarations: [ReusableTableComponent],
  exports: [ReusableTableComponent],
  imports: [CommonModule, SharedMaterialComponentsModule]
})
export class ReusableTableModule {}
