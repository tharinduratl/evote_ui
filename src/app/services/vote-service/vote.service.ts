import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VoteResponse } from 'src/app/models/vote-result';
import { PoliticalPartiesResponse } from 'src/app/models/political-parties';
import { VoteVerificationResponse } from 'src/app/models/vote-verification-result';
import { ElectionResultsResponse } from 'src/app/models/election-results';
import { PollingDistrictResponse } from 'src/app/models/polling-divisions';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiUrl = '/evote-rest-api';
  private electionCode = 'PARLMNT_2025';
  private voteCenter = '01_A_0';
  private votingToken:string ="";
  private voteFinalizedToken:string ="";

  constructor( private httpClient:HttpClient) { }

  validateVoter(voterId):Observable<VoteResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/" + this.electionCode + '/' + this.voteCenter + '/voters/'+ voterId + "?mode=VALIDATE";
    return this.httpClient.get<VoteResponse>(url);
  }

  castVote(party, candidateNo):Observable<VoteResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/votes";
    const body = {
      votingToken: this.votingToken,
      partyCode: party,
      candidateNo: [candidateNo]
    };
    return this.httpClient.post<VoteResponse>(url, body);
  }

  loadPoliticalParties(district):Observable<PoliticalPartiesResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/pollingParties";
    return this.httpClient.get<PoliticalPartiesResponse>(url);
  }

  loadPollingDistricts():Observable<PollingDistrictResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/pollingDivisions";
    return this.httpClient.get<PollingDistrictResponse>(url);
  }

  verifyVotedToken(votedToken):Observable<VoteVerificationResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/votes/" + votedToken;
    return this.httpClient.get<VoteVerificationResponse>(url);
  }

  loadElectionDistrictResults(districtCode):Observable<ElectionResultsResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/election-results/"+this.electionCode+"/" + districtCode;
    return this.httpClient.get<ElectionResultsResponse>(url);
  }

  loadElectionDistrictCandiateResults(districtCode, partyCode):Observable<ElectionResultsResponse>{
    const url = this.getEndpointFromLocal() + "/evote-api/election-results/candidates/"+this.electionCode+"/" + districtCode+ "/"+partyCode;
    return this.httpClient.get<ElectionResultsResponse>(url);
  }

  getEndpointFromLocal():string{
    var endpointUrl = this.apiUrl;
    if( localStorage.getItem('apiEndpoint') && localStorage.getItem('apiEndpoint').length > 0){
      endpointUrl = localStorage.getItem('apiEndpoint');
    }else{
      localStorage.setItem('apiEndpoint', this.apiUrl);
    }
    return endpointUrl;
  }

  setVotingToken(votingToken){
    this.votingToken = votingToken;
  }

  getVotingToken(){
    return this.votingToken;
  }

  setVoteFinalizedToken(votedToken){
    this.voteFinalizedToken = votedToken;
  }

  getVoteFinalizedToken(){
    return this.voteFinalizedToken;
  }

  isValidSession(){
    return this.votingToken != null && this.votingToken.length > 0;
  }

  getElectionCode() {
    return this.electionCode;
  }

  setElectionCode(value) {
    this.electionCode = value;
  }

  getVoteCenter() {
    return this.voteCenter;
  }

  setVoteCenter(value) {
    this.voteCenter = value;
  }

  getAPIURL() {
    return this.apiUrl;
  }

  setAPIURL(value) {
    this.apiUrl = value;
  }

}
