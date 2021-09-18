import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { VoteVerificationResult } from 'src/app/models/vote-verification-result';
import { VoteService } from 'src/app/services/vote-service/vote.service';

@Component({
  selector: 'app-result-validate',
  templateUrl: './result-validate.component.html',
  styleUrls: ['./result-validate.component.css']
})
export class ResultValidateComponent implements OnInit {

  votingError = false;
  tokenCode:string = null;

  voteStatus:VoteVerificationResult = null;

  constructor(private voteService: VoteService) { }

  idFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

  validateVoter(){
    if(!this.tokenCode){
      return;
    }
    this.voteService.verifyVotedToken(this.tokenCode).subscribe((token) => {
      if( token.data ){
        this.voteStatus = token.data;
      }else{
        this.votingError = true;
        console.log(token);
      }
    },
    error => {
      this.votingError = true;
      console.log(error);
    });
  }
}
