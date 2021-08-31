import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRequestsComponent } from './funding-requests.component';

describe('FundingRequestsComponent', () => {
  let component: FundingRequestsComponent;
  let fixture: ComponentFixture<FundingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
