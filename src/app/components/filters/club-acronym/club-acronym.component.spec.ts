import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAcronymComponent } from './club-acronym.component';

describe('ClubAcronymComponent', () => {
    let component: ClubAcronymComponent;
    let fixture: ComponentFixture<ClubAcronymComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClubAcronymComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubAcronymComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
