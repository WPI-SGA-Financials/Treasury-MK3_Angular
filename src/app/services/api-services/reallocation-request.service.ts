import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { PagedRequestModel } from '../../types/paged-request.model';
import { Observable } from 'rxjs';
import { PagedResponseModel } from '../../types/paged-response.model';
import { ExtendedReallocation, Reallocation } from '../../types/reallocation.model';
import { Path_Api } from '../../types/path.enum';
import { ResponseModel } from '../../types/response.model';

@Injectable({
  providedIn: 'root'
})
export class ReallocationRequestService {

  constructor(private httpService: HttpService) { }

  /**
   * Gets a paged response of Reallocation Requests
   *
   * @param pagedRequest
   */
  getReallocations(pagedRequest: PagedRequestModel = {rpp: 10, page: 1}): Observable<PagedResponseModel<Reallocation>> {
    return this.httpService.postRequest(`${Path_Api.REALLOCATIONS}`, pagedRequest);
  }

  /**
   * Gets an Organizations Reallocation Requests
   *
   * @param name
   */
  getOrganizationReallocationRequests(name: string): Observable<ResponseModel<Reallocation[]>> {
    return this.httpService.getRequest(`${Path_Api.ORGANIZATION}/${name}/reallocs`)
  }

  /**
   * Gets a Reallocation Request based on ID
   *
   * @param id
   */
  getReallocationRequest(id: number): Observable<ResponseModel<ExtendedReallocation>> {
    return this.httpService.getRequest(`${Path_Api.SPECIFIC_REALLOC}/${id}`)
  }
}
