import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocationRequestPopupComponent } from './reallocation-request-popup.component';

describe('ReallocationRequestPopupComponent', () => {
  let component: ReallocationRequestPopupComponent;
  let fixture: ComponentFixture<ReallocationRequestPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReallocationRequestPopupComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocationRequestPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
