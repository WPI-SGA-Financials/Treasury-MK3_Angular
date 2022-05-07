import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';
import { ClubClassification } from '../types/metadata.model';

@Component({
    selector: 'app-club-classification',
    templateUrl: './club-classification.component.html',
    styleUrls: ['./club-classification.component.scss'],
})
export class ClubClassificationFilterComponent {
    formGroup: FormGroup;

    clubClassification: AbstractControl;

    @Input() classifications: ClubClassification[] = [];

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            clubClassification: ['', [Validators.minLength(1)]],
        });

        this.clubClassification = <AbstractControl>this.formGroup.get('clubClassification');
    }

    onSubmit($event: any) {
        if (this.formGroup.valid && ($event.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.CLASSIFICATION],
                filterName: FILTER.CLASSIFICATION,
                filterValue: $event.value as string,
            };

            this.search.emit(filter);
        }
        this.formGroup.reset();
    }
}
