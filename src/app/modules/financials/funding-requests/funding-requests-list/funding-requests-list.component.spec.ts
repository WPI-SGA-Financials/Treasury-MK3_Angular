import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRequestsListComponent } from './funding-requests-list.component';

describe('FundingRequestsComponent', () => {
    let component: FundingRequestsListComponent;
    let fixture: ComponentFixture<FundingRequestsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FundingRequestsListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FundingRequestsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
