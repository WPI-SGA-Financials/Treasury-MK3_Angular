import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FILTER, FILTER_DISPLAY_NAME, IFilter } from '../types/filter';

@Component({
    selector: 'app-fiscal-class',
    templateUrl: './fiscal-class.component.html',
    styleUrls: ['./fiscal-class.component.scss'],
})
export class FiscalClassFilterComponent {
    formGroup: FormGroup;

    fiscalClass: AbstractControl;

    @Input()
    fiscalClasses: string[] = [];

    @Output()
    search: EventEmitter<any> = new EventEmitter<any>();

    constructor(private readonly fb: FormBuilder) {
        this.formGroup = this.fb.group({
            fiscalClass: ['', [Validators.minLength(1)]],
        });

        this.fiscalClass = <AbstractControl>this.formGroup.get('fiscalClass');
    }

    onSubmit($event: any) {
        console.log($event);

        if (this.formGroup.valid && ($event.value as string).trim()) {
            const filter: IFilter = {
                filterDisplayName: FILTER_DISPLAY_NAME[FILTER.FISCAL_CLASS],
                filterName: FILTER.FISCAL_CLASS,
                filterValue: $event.value as string,
            };

            this.search.emit(filter);
        }
        this.formGroup.reset();
    }
}
