import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubInactiveFilterComponent } from './club-inactive.component';

describe('ClubInactiveComponent', () => {
    let component: ClubInactiveFilterComponent;
    let fixture: ComponentFixture<ClubInactiveFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClubInactiveFilterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubInactiveFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
