import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
    formGroup: FormGroup;

    description: AbstractControl;

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            description: ['', [Validators.minLength(1)]],
        });

        this.description = <AbstractControl>this.formGroup.get('description');
    }

    onSubmit($event: any) {
        $event.preventDefault();

        if (this.formGroup.valid && (this.description.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.DESCRIPTION],
                filterName: FILTER.DESCRIPTION,
                filterValue: this.description.value as string,
            };

            this.search.emit(filter);
            this.description.setValue('');
        }
    }
}
