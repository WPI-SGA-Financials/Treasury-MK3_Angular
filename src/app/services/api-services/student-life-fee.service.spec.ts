import { TestBed } from '@angular/core/testing';

import { StudentLifeFeeService } from './student-life-fee.service';

describe('StudentLifeFeeService', () => {
    let service: StudentLifeFeeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StudentLifeFeeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
