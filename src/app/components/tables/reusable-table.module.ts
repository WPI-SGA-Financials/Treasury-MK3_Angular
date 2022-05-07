import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { HttpPageableTableComponent } from './http-pageable-table/http-pageable-table.component';
import { FilterableTableComponent } from './filterable-table/filterable-table.component';
import { SharedFiltersModule } from '../filters/shared-filters.module';

@NgModule({
    declarations: [ReusableTableComponent, HttpPageableTableComponent, FilterableTableComponent],
    exports: [ReusableTableComponent, HttpPageableTableComponent, FilterableTableComponent],
    imports: [CommonModule, SharedMaterialComponentsModule, SharedPipesModule, SharedFiltersModule],
})
export class ReusableTableModule {}
