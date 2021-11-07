export interface FundingRequest {
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

export interface ExtendedFundingRequest extends FundingRequest {
  dateOfEvent: string;
  frAppeal: FundingRequestAppeal;
}

interface FundingRequestAppeal {
  id: number;
  newDotNumber: number;
  appealDate: number;
  description: string;
  appealAmount: number;
  decision: string;
  approvedAppeal: number;
  minutesLink: string;
}
