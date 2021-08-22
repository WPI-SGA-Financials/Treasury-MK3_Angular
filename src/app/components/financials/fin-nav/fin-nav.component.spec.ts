import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinNavComponent } from './fin-nav.component';

describe('FinNavComponent', () => {
  let component: FinNavComponent;
  let fixture: ComponentFixture<FinNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinNavComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
