export interface PagedResponseModel<T> {
  data: T[];
  message: string;
  pageNumber: number;
  resultsPerPage: number;
  maxResults: number;
}
