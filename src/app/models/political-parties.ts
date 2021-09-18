export interface PoliticalPartiesResponse{
    data: PoliticalParty[];
}

export interface PoliticalParty{
    docType: string;
    code: string;
    name: string;
}