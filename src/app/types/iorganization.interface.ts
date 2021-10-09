export interface IOrganization {
  nameOfClub: string;
  classification: string;
  typeOfClub: string;
  accountNumber: string | null;
  acronym: string | null;
  inactive: boolean;
  timestamp: string;
}

export interface IOrganizationExtended extends IOrganization {
  fiVizClubClassification: string;
  techsyncName: string;
}
