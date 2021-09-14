export interface IFundingRequest {
  id: number;
  nameOfClub: string;
  dotNumber: string;
  hearingDate: string;
  description: string;
  fiscalYear: string;
  amountRequested: number;
  decision: string;
  amountApproved: number;
}

export interface IExtendedFR extends IFundingRequest {

}
