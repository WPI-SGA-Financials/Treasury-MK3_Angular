import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@treasury-services/http.service';
import { ResponseModel } from '@treasury-types/response.model';
import { Budget, ExtendedBudget } from '@treasury-types/budget.model';
import { PagedRequestModel } from '@treasury-types/paged-request.model';
import { PagedResponseModel } from '@treasury-types/paged-response.model';

@Injectable({
    providedIn: 'root',
})
export class BudgetService {
    constructor(private httpService: HttpService) {}

    /**
     * Gets a paged response of Budgets
     *
     * @param pagedRequest
     */
    getBudgets(
        pagedRequest: PagedRequestModel = { resultsPerPage: 10, page: 1 },
    ): Observable<PagedResponseModel<Budget>> {
        return this.httpService.postRequest(`financials/budgets`, pagedRequest);
    }

    /**
     * Gets a Organizations Budgets
     *
     * @param name
     */
    getOrganizationBudgets(name: string): Observable<ResponseModel<Budget[]>> {
        return this.httpService.getRequest(`organization/${name}/budgets`);
    }

    /**
     * Gets a Budget based on ID
     *
     * @param id
     */
    getBudget(id: number): Observable<ResponseModel<ExtendedBudget>> {
        return this.httpService.getRequest(`financials/budget/${id}`);
    }
}
