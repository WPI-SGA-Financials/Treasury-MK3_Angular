import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPopupComponent } from './budget-popup.component';

describe('BudgetPopupComponent', () => {
    let component: BudgetPopupComponent;
    let fixture: ComponentFixture<BudgetPopupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BudgetPopupComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BudgetPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
