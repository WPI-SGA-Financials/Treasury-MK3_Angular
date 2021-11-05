import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Path_Api } from '../../types/path.enum';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../types/response.model';
import { Budget, ExtendedBudget } from '../../types/budget.model';
import { PagedRequestModel } from '../../types/paged-request.model';
import { PagedResponseModel } from '../../types/paged-response.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpService: HttpService) {
  }

  /**
   * Gets a paged response of Budgets
   *
   * @param pagedRequest
   */
  getBudgets(pagedRequest: PagedRequestModel = { rpp: 10, page: 1 }): Observable<PagedResponseModel<Budget>> {
    return this.httpService.postRequest(`${Path_Api.BUDGETS}`, pagedRequest);
  }

  /**
   * Gets a Organizations Budgets
   *
   * @param name
   */
  getOrganizationBudgets(name: string): Observable<ResponseModel<Budget[]>> {
    return this.httpService.getRequest(`${Path_Api.ORGANIZATION}/${name}/budgets`);
  }

  /**
   * Gets a Budget based on ID
   *
   * @param id
   */
  getBudget(id: number): Observable<ResponseModel<ExtendedBudget>> {
    return this.httpService.getRequest(`${Path_Api.SPECIFIC_BUDGET}/${id}`);
  }
}
