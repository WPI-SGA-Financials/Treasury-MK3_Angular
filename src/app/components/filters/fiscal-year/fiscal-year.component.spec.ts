import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalYearFilterComponent } from './fiscal-year.component';

describe('FiscalYearComponent', () => {
  let component: FiscalYearFilterComponent;
  let fixture: ComponentFixture<FiscalYearFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiscalYearFilterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalYearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
