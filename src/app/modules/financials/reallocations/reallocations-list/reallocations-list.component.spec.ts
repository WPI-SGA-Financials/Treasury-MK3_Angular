import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocationsListComponent } from './reallocations-list.component';

describe('ReallocationsComponent', () => {
  let component: ReallocationsListComponent;
  let fixture: ComponentFixture<ReallocationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReallocationsListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
