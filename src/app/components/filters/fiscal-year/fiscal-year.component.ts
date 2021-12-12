import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';
import { FiscalYear } from '../types/metadata.model';

@Component({
  selector: 'app-fiscal-year',
  templateUrl: './fiscal-year.component.html',
  styleUrls: ['./fiscal-year.component.scss']
})
export class FiscalYearFilterComponent {
  formGroup: FormGroup;
  fiscalYear: AbstractControl;

  @Input()
  fiscalYears: FiscalYear[] = [];

  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      fiscalYear: ['', [Validators.minLength(1)]]
    });

    this.fiscalYear = <AbstractControl>this.formGroup.get('fiscalYear');
  }

  onSubmit($event: any) {
    if (this.formGroup.valid && ($event.value as string).trim()) {
      let filter: IFilter = {
        filterDisplayName: FILTER_DISPLAY_NAME[FILTER.FISCAL_YEAR],
        filterName: FILTER.FISCAL_YEAR,
        filterValue: $event.value as string
      };

      this.search.emit(filter);
    }
    this.formGroup.reset();
  }
}
