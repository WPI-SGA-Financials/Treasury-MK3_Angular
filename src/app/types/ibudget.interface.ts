export interface IBudget {
  id: number;
  nameOfClub: string;
  fiscalYear: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  amountApproved: number;
}

export interface IExtendedBudget extends IBudget {
  appealed: boolean;
  appealAmount: number;
  appealDecision: string;
  approvedAppeal: number;
  sections: IBudgetSections[];
}

export interface IBudgetSections {
  id: number;
  name: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  appealed: boolean;
  requestedAppeal: number;
  approvedAppeal: number;
  amountApproved: number;
}
