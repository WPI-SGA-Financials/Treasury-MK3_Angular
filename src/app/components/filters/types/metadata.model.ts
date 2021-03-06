export interface AllMetadata {
    clubClassifications: ClubClassification[];
    clubTypes: ClubType[];
    fiscalYears: FiscalYear[];
    fiscalClasses: string[];
}

export interface ClubClassification {
    id: number;
    classification: string;
}

export interface ClubType {
    id: number;
    type: string;
}

export interface FiscalYear {
    id: number;
    fy: string;
}
