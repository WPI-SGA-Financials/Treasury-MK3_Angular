import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { ResponseModel } from '../../types/response.model';
import { StudentLifeFee } from '../../types/student-life-fee.model';

@Injectable({
    providedIn: 'root',
})
export class StudentLifeFeeService {
    constructor(private httpService: HttpService) {}

    private readonly _path = 'financials/slf';

    /**
     * Gets all Student Life Fees
     */
    getStudentLifeFees(): Observable<ResponseModel<StudentLifeFee[]>> {
        return this.httpService.getRequest(this._path);
    }

    /**
     * Gets a Student Life Fee by Fiscal Year
     *
     * @param fiscalYear
     */
    getStudentLifeFeeByFY(fiscalYear: number): Observable<ResponseModel<StudentLifeFee>> {
        return this.httpService.getRequest(`${this._path}/${fiscalYear}`);
    }
}
