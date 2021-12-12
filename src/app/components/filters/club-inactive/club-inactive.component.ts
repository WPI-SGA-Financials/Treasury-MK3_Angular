import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
  selector: 'app-club-inactive',
  templateUrl: './club-inactive.component.html',
  styleUrls: ['./club-inactive.component.scss']
})
export class ClubInactiveFilterComponent {
  formGroup: FormGroup;
  includeInactive: AbstractControl;

  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      includeInactive: ['', [Validators.minLength(1)]]
    });

    this.includeInactive = <AbstractControl>this.formGroup.get('includeInactive');
  }

  onSubmit($event: any) {
    console.log($event);

    let filter: IFilter = {
      filterDisplayName: FILTER_DISPLAY_NAME[FILTER.INCLUDE_INACTIVE],
      filterName: FILTER.INCLUDE_INACTIVE,
      filterValue: $event.checked as boolean
    };

    this.search.emit(filter);
  }
}
