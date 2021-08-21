import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivizComponent } from './fiviz.component';

describe('FivizComponent', () => {
  let component: FivizComponent;
  let fixture: ComponentFixture<FivizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
