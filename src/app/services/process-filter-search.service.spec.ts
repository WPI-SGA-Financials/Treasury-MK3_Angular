import { TestBed } from '@angular/core/testing';

import { ProcessFilterSearchService } from './process-filter-search.service';

describe('ProcessFilterSearchService', () => {
    let service: ProcessFilterSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProcessFilterSearchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
