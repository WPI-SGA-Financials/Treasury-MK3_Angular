export const FILTER = {
  NAME_OF_CLUB: 'name',
  ACRONYM: 'acronym',
  CLASSIFICATION: 'classification',
  TYPE: 'type',
  INCLUDE_INACTIVE: 'includeInactive',
  FISCAL_CLASS: 'fiscalClass',
  FISCAL_YEAR: 'fiscalYear',
  DESCRIPTION: 'description',
  MINIMUM_REQUESTED_AMOUNT: 'minimumRequestedAmount',
  DOT_NUMBER: 'dotNumber'
};

export const FILTER_DISPLAY_NAME = {
  [FILTER.NAME_OF_CLUB]: 'Name of Club',
  [FILTER.ACRONYM]: 'Acronym',
  [FILTER.CLASSIFICATION]: 'Classification',
  [FILTER.TYPE]: 'Type of Club',
  [FILTER.INCLUDE_INACTIVE]: 'Include Inactive',
  [FILTER.FISCAL_CLASS]: 'Fiscal Class',
  [FILTER.FISCAL_YEAR]: 'Fiscal Year',
  [FILTER.DESCRIPTION]: 'Description',
  [FILTER.MINIMUM_REQUESTED_AMOUNT]: 'Minimum Requested Amount',
  [FILTER.DOT_NUMBER]: 'Dot Number'
};

export interface IFilter {
  filterName: string;
  filterDisplayName: string;
  filterValue: any;
}
