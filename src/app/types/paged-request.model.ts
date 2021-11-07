export interface PagedRequestModel {
  page: number;
  rpp: number;

  // Organization Filters
  name?: string[];
  acronym?: string[];
  classification?: string[]; // Need to change this to something else. Maybe number and then update db model
  type?: string[]; // Same as above
  includeInactive?: boolean;

  // Financial Filters
  fiscalClass?: string;
  fiscalYear?: number;
  requestedAmount?: number;
}
