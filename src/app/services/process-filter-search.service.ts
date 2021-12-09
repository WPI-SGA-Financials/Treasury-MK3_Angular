import { Injectable } from '@angular/core';
import { FILTER, IFilter } from '../components/filters/types/filter';
import { PagedRequestModel } from '../types/paged-request.model';

interface FilterSearch {
  pagedRequest: PagedRequestModel;
  filters: IFilter[];
  updateData: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProcessFilterSearchService {
  constructor() {}

  // TODO: Cooperate with non-array based filters
  // TODO: Split on semicolon for multi value input??
  addFilters($event: IFilter, pagedRequest: PagedRequestModel, filters: IFilter[]): FilterSearch {
    let returnData: FilterSearch = {
      pagedRequest: pagedRequest,
      filters: filters,
      updateData: false
    };

    if ($event.filterName === FILTER.INCLUDE_INACTIVE) {
      if ($event.filterValue === true) {
        returnData.filters.push($event);
      } else {
        returnData.filters = returnData.filters.filter((value) => value.filterName !== FILTER.INCLUDE_INACTIVE);
      }

      returnData.pagedRequest.includeInactive = $event.filterValue as boolean;
      returnData.pagedRequest.page = 1;
      returnData.updateData = true;

      return returnData;
    }

    let value = returnData.pagedRequest[$event.filterName].find((element: string) => element === $event.filterValue);

    if (value === undefined) {
      returnData.filters.push($event);
      returnData.pagedRequest[$event.filterName].push($event.filterValue);

      returnData.pagedRequest.page = 1;

      returnData.updateData = true;
    }

    return returnData;
  }

  removeFilter($event: IFilter, pagedRequest: PagedRequestModel, filters: IFilter[]): FilterSearch {
    let returnData: FilterSearch = {
      pagedRequest: pagedRequest,
      filters: filters,
      updateData: false
    };

    if ($event.filterName === FILTER.INCLUDE_INACTIVE) {
      returnData.filters = returnData.filters.filter((value) => value.filterName !== FILTER.INCLUDE_INACTIVE);

      returnData.pagedRequest.includeInactive = false as boolean;
      returnData.pagedRequest.page = 1;
      returnData.updateData = true;

      return returnData;
    }

    returnData.pagedRequest[$event.filterName] = returnData.pagedRequest[$event.filterName].filter(
      (element: string) => element !== $event.filterValue
    );

    returnData.filters = returnData.filters.filter((value) => value !== $event);

    returnData.pagedRequest.page = 1;
    returnData.updateData = true;

    return returnData;
  }
}
