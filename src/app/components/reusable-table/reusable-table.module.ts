import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

@NgModule({
  declarations: [ReusableTableComponent],
  exports: [ReusableTableComponent],
  imports: [CommonModule, SharedMaterialComponentsModule, SharedPipesModule]
})
export class ReusableTableModule {}
