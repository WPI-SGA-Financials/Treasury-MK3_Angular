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

export interface IExtendedFundingRequest extends IFundingRequest {
  dateOfEvent: string;
  frAppeal: IFundingRequestAppeal;
}

interface IFundingRequestAppeal {
  id: number;
  newDotNumber: number;
  appealDate: number;
  description: string;
  appealAmount: number;
  decision: string;
  approvedAppeal: number;
  minutesLink: string;
}
