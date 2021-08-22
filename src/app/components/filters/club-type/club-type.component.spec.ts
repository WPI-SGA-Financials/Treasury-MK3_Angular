import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTypeComponent } from './club-type.component';

describe('ClubTypeComponent', () => {
  let component: ClubTypeComponent;
  let fixture: ComponentFixture<ClubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubTypeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
