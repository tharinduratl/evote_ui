import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../../services/vote-service/vote.service';


@Component({
  selector: 'app-vote-screen',
  templateUrl: './vote-screen.component.html',
  styleUrls: ['./vote-screen.component.css']
})
export class VoteScreenComponent implements OnInit {

  votingError = false;

  constructor(private router:Router,
    private voteService: VoteService) { }

  parties = [];
  candidates = [];

  selectedParty:string = null;
  selectedCandidate:string = null;

  errorIDMsg: string = "Invalid voter identity!";
  errorNoDataMsg: string = "Please select your perference!"
  voterErrorMsg:string = ""

  ngOnInit() {
    // if( !this.voteService.isValidSession()){
    //   this.router.navigate(['/voter-login']);
    //   return;
    // }
    this.loadPoliticalParties();

    for(let i=1; i<=25; i++){
      this.candidates.push(i);
    }
    
  }

  castVote(){
    if( !this.selectedParty || !this.selectedCandidate){
      this.votingError = true;
      this.voterErrorMsg = this.errorNoDataMsg;
      return
    }

    this.voteService.castVote(this.selectedParty, this.selectedCandidate).subscribe((token) => {
      if( token.data && token.data.status === "SUCCESS"){
        this.voteService.setVotingToken(null);
        this.voteService.setVoteFinalizedToken(token.data.votingToken);
        this.votingError = false;
        this.router.navigate(['/voted']);
      }else{
        this.votingError = true;
        this.voterErrorMsg = this.errorIDMsg;
        console.log(token);
      }
    },
    error => {
      this.votingError = true;
      this.voterErrorMsg = this.errorIDMsg;
      console.log(error);
    });
  }

  loadPoliticalParties(){
    this.voteService.loadPoliticalParties("").subscribe((token) =>{
      if( token.data ){
        token.data.forEach( (element) => {
          this.parties.push({code:element.code, name:element.name});
        });
      }else{
        this.parties.push({code:'A', name:'Party A'});
        console.log(token);
      }
    },
    error => {
      this.parties.push({code:'A', name:'Party A'});
      console.log(error);
    });
  }
}


