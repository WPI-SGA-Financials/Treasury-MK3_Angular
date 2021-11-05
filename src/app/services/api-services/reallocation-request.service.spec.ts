import { TestBed } from '@angular/core/testing';

import { ReallocationRequestService } from './reallocation-request.service';

describe('Reallocation Request Service', () => {
  let service: ReallocationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReallocationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
