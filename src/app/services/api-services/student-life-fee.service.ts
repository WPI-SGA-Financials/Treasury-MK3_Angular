import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { ResponseModel } from '../../types/response.model';
import { StudentLifeFee } from '../../types/student-life-fee.model';
import { Path_Api } from '../../types/path.enum';

@Injectable({
    providedIn: 'root',
})
export class StudentLifeFeeService {
    constructor(private httpService: HttpService) {}

    /**
     * Gets all Student Life Fees
     */
    getStudentLifeFees(): Observable<ResponseModel<StudentLifeFee[]>> {
        return this.httpService.getRequest(`${Path_Api.STUDENT_LIFE_FEE}`);
    }

    /**
     * Gets a Student Life Fee by Fiscal Year
     *
     * @param fiscalYear
     */
    getStudentLifeFeeByFY(fiscalYear: number): Observable<ResponseModel<StudentLifeFee>> {
        return this.httpService.getRequest(`${Path_Api.STUDENT_LIFE_FEE}/${fiscalYear}`);
    }
}
