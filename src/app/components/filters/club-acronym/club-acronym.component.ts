import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
  selector: 'app-club-acronym',
  templateUrl: './club-acronym.component.html',
  styleUrls: ['./club-acronym.component.scss']
})
export class ClubAcronymFilterComponent {
  formGroup: FormGroup;
  clubAcronym: AbstractControl;

  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      clubAcronym: ['', [Validators.minLength(1)]]
    });

    this.clubAcronym = <AbstractControl>this.formGroup.get('clubAcronym');
  }

  onSubmit($event: any) {
    $event.preventDefault();

    if (this.formGroup.valid && (this.clubAcronym.value as string).trim()) {
      let filter: IFilter = {
        filterDisplayName: FILTER_DISPLAY_NAME[FILTER.ACRONYM],
        filterName: FILTER.ACRONYM,
        filterValue: this.clubAcronym.value as string
      };

      this.search.emit(filter);
      this.clubAcronym.setValue('');
    }
  }
}
