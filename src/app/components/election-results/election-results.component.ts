import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/vote-service/vote.service';

@Component({
  selector: 'app-election-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css']
})
export class ElectionResultsComponent implements OnInit {

  selectedDistrict: string = null;
  selectedParty: string = null;
  parties = [];
  pollingDistricts = [];

  partyResults = [];
  candidateResults = [];

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.loadPoliticalParties();
    this.loadPollingDistricts();
  }

  loadElectionResults() {
    if (!this.selectedDistrict || (!this.selectedDistrict && (!this.selectedParty || this.selectedParty.length == 0 ) )) {
      return;
    }
    this.partyResults = [];
    this.candidateResults = [];

    if (!this.selectedParty || this.selectedParty.length ==0) {
      //district party level
      this.voteService.loadElectionDistrictResults(this.selectedDistrict).subscribe((token) => {
        if (token.data && token.data.status === 'VALID' && token.data.partyResults) {
          token.data.partyResults.forEach((element) => {
            this.partyResults.push({ code: element.partyCode, votes: element.votes });
          });
        }
      },
        error => {
          console.log(error);
        });
    } else {
      //candidate
      this.voteService.loadElectionDistrictCandiateResults(this.selectedDistrict, this.selectedParty).subscribe((token) => {
        if (token.data && token.data.status === 'VALID' && token.data.partyResults && token.data.partyResults.length > 0) {
          token.data.partyResults[0].candidateResults.forEach((element) => {
            this.candidateResults.push({ code: element.candidateNo, votes: element.votes });
          });
          this.candidateResults.push({ code: 'Total Votes', votes: token.data.partyResults[0].votes });
        }
      },
        error => {
          console.log(error);
        });
    }
  }

  loadPoliticalParties() {
    this.voteService.loadPoliticalParties("").subscribe((token) => {
      this.parties.push({ code: '', name: 'Not Specified' });
      if (token.data) {
        token.data.forEach((element) => {
          this.parties.push({ code: element.code, name: element.name });
        });
      } else {
        this.parties.push({ code: 'AAA', name: 'Party A' });
        console.log(token);
      }
    },
      error => {
        this.parties.push({ code: '', name: 'Not Specified' });
        this.parties.push({ code: 'AAA', name: 'Party A' });
        console.log(error);
      });
  }

  loadPollingDistricts() {
    this.voteService.loadPollingDistricts().subscribe((token) => {
      if (token.data) {
        token.data.forEach((element) => {
          this.pollingDistricts.push({ code: element.code, name: element.name });
        });
      } else {
        this.pollingDistricts.push({ code: 'A', name: 'Colombo' });
        console.log(token);
      }
    },
      error => {
        this.pollingDistricts.push({ code: 'A', name: 'Colombo' });
        console.log(error);
      });
  }
}
