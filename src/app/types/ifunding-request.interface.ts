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
  eventDate: string;
  appealed: string;
  requestedAppeal: number;
  appealDecision: string;
  approvedAppeal: number;
  appealMinutes: string;
}
