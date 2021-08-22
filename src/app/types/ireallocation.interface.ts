export interface IReallocation {
  id: number;
  nameOfClub: string;
  description: string;
  hearingDate: string;
  fiscalYear: string;
  dotNumber: string;
  allocatedFrom: string | null;
  allocatedTo: string | null;
  allocationAmount: number;
  decision: string;
  amountApproved: number;
  timestamp: string;
}
