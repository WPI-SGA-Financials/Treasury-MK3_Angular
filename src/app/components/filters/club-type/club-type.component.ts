import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubType } from '../types/metadata.model';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
    selector: 'app-club-type',
    templateUrl: './club-type.component.html',
    styleUrls: ['./club-type.component.scss'],
})
export class ClubTypeFilterComponent {
    formGroup: FormGroup;

    clubType: AbstractControl;

    @Input() clubTypes: ClubType[] = [];

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            clubType: ['', [Validators.minLength(1)]],
        });

        this.clubType = <AbstractControl>this.formGroup.get('clubType');
    }

    onSubmit($event: any) {
        if (this.formGroup.valid && ($event.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.TYPE],
                filterName: FILTER.TYPE,
                filterValue: $event.value as string,
            };

            this.search.emit(filter);
        }
        this.formGroup.reset();
    }
}
