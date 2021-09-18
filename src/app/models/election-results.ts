export interface ElectionResultsResponse{
    data: ElectionResults;
}

export interface ElectionResults{
    status: string;
    electionCode: string;
    partyResults: ElectionResultParty[];
}

export interface ElectionResultParty{
    partyCode: string;
    votes: number;
    candidateResults: ElectionResultCandidate[];
}

export interface ElectionResultCandidate{
    candidateNo: string;
    votes: number;
}
