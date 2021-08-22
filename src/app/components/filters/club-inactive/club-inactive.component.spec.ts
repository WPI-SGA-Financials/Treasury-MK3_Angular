import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubInactiveComponent } from './club-inactive.component';

describe('ClubInactiveComponent', () => {
  let component: ClubInactiveComponent;
  let fixture: ComponentFixture<ClubInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubInactiveComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
