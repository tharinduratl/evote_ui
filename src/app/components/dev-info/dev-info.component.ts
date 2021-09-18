import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { VoteService } from 'src/app/services/vote-service/vote.service';

@Component({
  selector: 'app-dev-info',
  templateUrl: './dev-info.component.html',
  styleUrls: ['./dev-info.component.css']
})
export class DevInfoComponent implements OnInit {

  tempToken:string = '';
  electionCode:string = '';
  votingCenterCode:string = '';

  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.tempToken = this.voteService.getVotingToken();
    this.electionCode = this.voteService.getElectionCode();
    this.votingCenterCode = this.voteService.getVoteCenter();
  }

  onFocusOutEvent(event: any){
    if( event.target && event.target.value && event.target.value.length > 0 )
    {
      if( event.target.name === "tempToken"){
        this.voteService.setVotingToken( event.target.value );
      } else if( event.target.name === "electionCode"){
        this.voteService.setElectionCode( event.target.value );
      } else if( event.target.name === "votingCenterCode"){
        this.voteService.setVoteCenter( event.target.value );
      }
    }
  }

}
