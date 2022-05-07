import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalClassFilterComponent } from './fiscal-class.component';

describe('FiscalClassComponent', () => {
    let component: FiscalClassFilterComponent;
    let fixture: ComponentFixture<FiscalClassFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FiscalClassFilterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FiscalClassFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
