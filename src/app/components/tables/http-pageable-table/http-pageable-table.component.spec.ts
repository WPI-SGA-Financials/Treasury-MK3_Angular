import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPageableTableComponent } from './http-pageable-table.component';

describe('HttpPageableTableComponent', () => {
  let component: HttpPageableTableComponent;
  let fixture: ComponentFixture<HttpPageableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPageableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPageableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
