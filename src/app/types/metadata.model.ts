export interface AllMetadata {
  clubClassifications: ClubClassification[];
  clubTypes: ClubType[];
}

export interface ClubClassification {
  id: number;
  classification: string;
}

export interface ClubType {
  id: number;
  type: string;
}
