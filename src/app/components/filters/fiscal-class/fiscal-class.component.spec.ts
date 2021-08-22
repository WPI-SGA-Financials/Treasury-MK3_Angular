import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalClassComponent } from './fiscal-class.component';

describe('FiscalClassComponent', () => {
  let component: FiscalClassComponent;
  let fixture: ComponentFixture<FiscalClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiscalClassComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
