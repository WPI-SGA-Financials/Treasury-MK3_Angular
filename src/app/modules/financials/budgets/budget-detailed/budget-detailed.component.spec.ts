import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailedComponent } from './budget-detailed.component';

describe('BudgetDetailedComponent', () => {
  let component: BudgetDetailedComponent;
  let fixture: ComponentFixture<BudgetDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
