import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubClassificationComponent } from './club-classification.component';

describe('ClubClassificationComponent', () => {
    let component: ClubClassificationComponent;
    let fixture: ComponentFixture<ClubClassificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClubClassificationComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubClassificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
