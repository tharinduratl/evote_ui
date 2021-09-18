export interface VoteResponse{
    data: VoteResult;
}

export interface VoteResult{
    status: string;
    votingToken: string;
}
