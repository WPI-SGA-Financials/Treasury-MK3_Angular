import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { PagedRequestModel } from '../../types/paged-request.model';
import { Organization, ExtendedOrganization } from '../../types/organization.model';
import { PagedResponseModel } from '../../types/paged-response.model';
import { ResponseModel } from '../../types/response.model';

@Injectable({
    providedIn: 'root',
})
export class OrganizationService {
    constructor(private httpService: HttpService) {}

    /**
     * Gets a paged response of Organizations
     *
     * @param pagedRequest
     */
    getOrganizations(
        pagedRequest: PagedRequestModel = { resultsPerPage: 10, page: 1 },
    ): Observable<PagedResponseModel<Organization>> {
        return this.httpService.postRequest(`organizations`, pagedRequest);
    }

    /** *
     * Gets a response of an Extended Organization
     *
     * @param name
     */
    getOrganization(name: string): Observable<ResponseModel<ExtendedOrganization>> {
        return this.httpService.getRequest(`organization/${name}`);
    }
}
