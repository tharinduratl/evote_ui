import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';import { Router } from '@angular/router';
import { VoteService } from '../../services/vote-service/vote.service';


@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css']
})
export class VoterLoginComponent implements OnInit {

  votingError = false;
  voterId:string = null;

  constructor(private voteService: VoteService,
    private router: Router) { }

  idFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

  validateVoter(){
    this.voteService.validateVoter(this.voterId).subscribe((token) => {
      if( token.data && token.data.status === "VALID"){
        this.voteService.setVotingToken(token.data.votingToken);
        this.votingError = false;
        this.router.navigate(['/vote']);
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
