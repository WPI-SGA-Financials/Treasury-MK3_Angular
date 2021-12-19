import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNumberComponent } from './dot-number.component';

describe('DotNumberComponent', () => {
  let component: DotNumberComponent;
  let fixture: ComponentFixture<DotNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
