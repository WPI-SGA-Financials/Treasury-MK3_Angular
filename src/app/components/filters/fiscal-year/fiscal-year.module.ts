import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiscalYearComponent } from './fiscal-year.component';

@NgModule({
  declarations: [FiscalYearComponent],
  exports: [FiscalYearComponent],
  imports: [CommonModule]
})
export class FiscalYearModule {}
