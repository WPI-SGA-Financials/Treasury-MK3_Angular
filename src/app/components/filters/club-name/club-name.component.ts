import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
    selector: 'app-club-name',
    templateUrl: './club-name.component.html',
    styleUrls: ['./club-name.component.scss'],
})
export class ClubNameFilterComponent {
    formGroup: FormGroup;

    clubName: AbstractControl;

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            clubName: ['', [Validators.minLength(1)]],
        });

        this.clubName = <AbstractControl>this.formGroup.get('clubName');
    }

    onSubmit($event: any) {
        $event.preventDefault();

        if (this.formGroup.valid && (this.clubName.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.NAME_OF_CLUB],
                filterName: FILTER.NAME_OF_CLUB,
                filterValue: this.clubName.value as string,
            };

            this.search.emit(filter);
            this.clubName.setValue('');
        }
    }
}
