export interface Reallocation {
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

export interface ExtendedReallocation extends Reallocation {
    allocatedFrom: string | null;
    allocatedTo: string | null;
    timestamp: string;
}
