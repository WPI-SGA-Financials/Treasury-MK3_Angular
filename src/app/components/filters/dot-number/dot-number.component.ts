import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
    selector: 'app-dot-number',
    templateUrl: './dot-number.component.html',
    styleUrls: ['./dot-number.component.scss'],
})
export class DotNumberComponent {
    formGroup: FormGroup;

    dotNumber: AbstractControl;

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            dotNumber: ['', [Validators.minLength(1)]],
        });

        this.dotNumber = <AbstractControl>this.formGroup.get('dotNumber');
    }

    onSubmit($event: any) {
        $event.preventDefault();

        if (this.formGroup.valid && (this.dotNumber.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.DOT_NUMBER],
                filterName: FILTER.DOT_NUMBER,
                filterValue: this.dotNumber.value as string,
            };

            this.search.emit(filter);
            this.dotNumber.setValue('');
        }
    }
}
