import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { HttpPageableTableComponent } from './http-pageable-table/http-pageable-table.component';

@NgModule({
  declarations: [ReusableTableComponent, HttpPageableTableComponent],
  exports: [ReusableTableComponent, HttpPageableTableComponent],
  imports: [CommonModule, SharedMaterialComponentsModule, SharedPipesModule]
})
export class ReusableTableModule {}
