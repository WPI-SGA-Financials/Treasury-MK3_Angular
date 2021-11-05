import { Injectable } from '@angular/core';
import {HttpService} from '../http.service'
import { PagedRequestModel } from '../../types/paged-request.model';
import { Observable } from 'rxjs';
import { Organization, ExtendedOrganization } from '../../types/organization.model';
import { PagedResponseModel } from '../../types/paged-response.model';
import { ResponseModel } from '../../types/response.model';
import { Path_Api } from '../../types/path.enum';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private httpService: HttpService) { }

  /**
   * Gets a paged response of Organizations
   *
   * @param pagedRequest
   */
  getOrganizations(pagedRequest: PagedRequestModel = {rpp: 10, page: 1}): Observable<PagedResponseModel<Organization>> {
    return this.httpService.postRequest(`${Path_Api.ORGANIZATIONS}`, pagedRequest);
  }

  /***
   * Gets a response of an Extended Organization
   *
   * @param name
   */
  getOrganization(name: string): Observable<ResponseModel<ExtendedOrganization>> {
    return this.httpService.getRequest(`${Path_Api.ORGANIZATION}/${name}`);
  }
}
