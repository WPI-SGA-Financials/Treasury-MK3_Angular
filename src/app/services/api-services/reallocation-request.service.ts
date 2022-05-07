import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { PagedRequestModel } from '../../types/paged-request.model';
import { PagedResponseModel } from '../../types/paged-response.model';
import { ExtendedReallocation, Reallocation } from '../../types/reallocation.model';
import { ResponseModel } from '../../types/response.model';

@Injectable({
    providedIn: 'root',
})
export class ReallocationRequestService {
    constructor(private httpService: HttpService) {}

    /**
     * Gets a paged response of Reallocation Requests
     *
     * @param pagedRequest
     */
    getReallocations(
        pagedRequest: PagedRequestModel = { resultsPerPage: 10, page: 1 },
    ): Observable<PagedResponseModel<Reallocation>> {
        return this.httpService.postRequest(`financials/reallocs`, pagedRequest);
    }

    /**
     * Gets an Organizations Reallocation Requests
     *
     * @param name
     */
    getOrganizationReallocationRequests(name: string): Observable<ResponseModel<Reallocation[]>> {
        return this.httpService.getRequest(`organization/${name}/reallocs`);
    }

    /**
     * Gets a Reallocation Request based on ID
     *
     * @param id
     */
    getReallocationRequest(id: number): Observable<ResponseModel<ExtendedReallocation>> {
        return this.httpService.getRequest(`financials/realloc/${id}`);
    }
}
