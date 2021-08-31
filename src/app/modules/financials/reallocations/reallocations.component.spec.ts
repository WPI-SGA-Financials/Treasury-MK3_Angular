import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocationsComponent } from './reallocations.component';

describe('ReallocationsComponent', () => {
  let component: ReallocationsComponent;
  let fixture: ComponentFixture<ReallocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReallocationsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
