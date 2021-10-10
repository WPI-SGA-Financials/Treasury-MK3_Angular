export interface IReallocation {
  id: number;
  nameOfClub: string;
  description: string;
  hearingDate: string;
  fiscalYear: string;
  dotNumber: string;
  allocationAmount: number;
  decision: string;
  amountApproved: number;
}

export interface IExtendedReallocation extends IReallocation {
  allocatedFrom: string | null;
  allocatedTo: string | null;
  timestamp: string;
}
