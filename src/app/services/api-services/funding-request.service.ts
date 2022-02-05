import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { PagedRequestModel } from '../../types/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponseModel } from '../../types/paged-response.model';
import { Budget, ExtendedBudget } from '../../types/budget.model';
import { Path_Api } from '../../types/path.enum';
import { ResponseModel } from '../../types/response.model';
import { ExtendedFundingRequest, FundingRequest } from '../../types/funding-request.model';

@Injectable({
  providedIn: 'root'
})
export class FundingRequestService {

  constructor(private httpService: HttpService) {
  }

  /**
   * Gets a paged response of Funding Requests
   *
   * @param pagedRequest
   */
  getFundingRequests(pagedRequest: PagedRequestModel = { resultsPerPage: 10, page: 1 }): Observable<PagedResponseModel<FundingRequest>> {
    return this.httpService.postRequest(`${Path_Api.FUNDINGREQUESTS}`, pagedRequest);
  }

  /**
   * Gets an Organizations Funding Requests
   *
   * @param name
   */
  getOrganizationFundingRequests(name: string): Observable<ResponseModel<FundingRequest[]>> {
    return this.httpService.getRequest(`${Path_Api.ORGANIZATION}/${name}/frs`);
  }

  /**
   * Gets a Funding Request based on ID
   *
   * @param id
   */
  getFundingRequest(id: number): Observable<ResponseModel<ExtendedFundingRequest>> {
    return this.httpService.getRequest(`${Path_Api.SPECIFIC_FR}/${id}`);
  }
}
