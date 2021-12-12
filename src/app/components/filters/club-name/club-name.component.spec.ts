import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNameFilterComponent } from './club-name.component';

describe('ClubNameComponent', () => {
  let component: ClubNameFilterComponent;
  let fixture: ComponentFixture<ClubNameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubNameFilterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
