export interface IBudget {
  id: number;
  nameOfClub: string;
  fiscalYear: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  appealed: boolean;
  requestedAppeal: number;
  approvedAppeal: number;
  amountApproved: number;
}
