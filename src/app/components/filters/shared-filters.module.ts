import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubClassificationFilterComponent } from './club-classification/club-classification.component';
import { ClubInactiveFilterComponent } from './club-inactive/club-inactive.component';
import { ClubNameFilterComponent } from './club-name/club-name.component';
import { ClubTypeFilterComponent } from './club-type/club-type.component';
import { FiscalClassFilterComponent } from './fiscal-class/fiscal-class.component';
import { FiscalYearFilterComponent } from './fiscal-year/fiscal-year.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipComponent } from './chip/chip.component';
import { ClubAcronymFilterComponent } from './club-acronym/club-acronym.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';

let filters = [
  ClubClassificationFilterComponent,
  ClubInactiveFilterComponent,
  ClubNameFilterComponent,
  ClubTypeFilterComponent,
  FiscalClassFilterComponent,
  FiscalYearFilterComponent,
  ChipComponent,
  ClubAcronymFilterComponent
];

@NgModule({
  declarations: filters,
  imports: [CommonModule, SharedMaterialComponentsModule, ReactiveFormsModule, MatSelectModule, MatSlideToggleModule, SharedPipesModule],
  exports: filters
})
export class SharedFiltersModule {}
