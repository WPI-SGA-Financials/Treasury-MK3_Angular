import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRequestPopupComponent } from './funding-request-popup.component';

describe('FundingRequestPopupComponent', () => {
  let component: FundingRequestPopupComponent;
  let fixture: ComponentFixture<FundingRequestPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundingRequestPopupComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingRequestPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
