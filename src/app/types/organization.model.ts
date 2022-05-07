export interface Organization {
    nameOfClub: string;
    classification: string;
    typeOfClub: string;
    accountNumber: string | null;
    acronym: string | null;
    inactive: boolean;
    timestamp: string;
}

export interface ExtendedOrganization extends Organization {
    fiVizClubClassification: string;
    techsyncName: string;
}
