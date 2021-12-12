import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTypeFilterComponent } from './club-type.component';

describe('ClubTypeComponent', () => {
  let component: ClubTypeFilterComponent;
  let fixture: ComponentFixture<ClubTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubTypeFilterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
