export interface VoteVerificationResponse{
    data: VoteVerificationResult;
}

export interface VoteVerificationResult{
    status: string;
    voterId: string;
    electionCode: string;
    token: string;
    votingCenterCode: string;
    votedTimestamp: string;
}
