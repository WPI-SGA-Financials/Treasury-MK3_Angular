export interface Budget {
  id: number;
  nameOfClub: string;
  fiscalYear: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  amountApproved: number;
}

export interface ExtendedBudget extends Budget {
  appealed: boolean;
  appealAmount: number;
  appealDecision: string;
  approvedAppeal: number;
  sections: BudgetSection[];
}

export interface BudgetSection {
  id: number;
  sectionName: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  appealed: boolean;
  requestedAppeal: number;
  approvedAppeal: number;
  amountApproved: number;
}
