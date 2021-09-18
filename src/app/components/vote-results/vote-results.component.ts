import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { VoteService } from 'src/app/services/vote-service/vote.service';


@Component({
  selector: 'app-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.css']
})
export class VoteResultsComponent implements OnInit {

  redirectTime = 5;
  private subscription: Subscription;
  voteFinalizedToken: string;

  constructor(private router:Router,
    private voteService: VoteService) { }

  ngOnInit() {
    // this.subscription = interval(1000)
    //        .subscribe(x => { 
    //          if(this.redirectTime > 0){
    //          this.redirectTime--; 
    //          }
    //           if(this.redirectTime === 0){
    //             this.router.navigate(['voter-login']);
    //           }
    //         });
           
    this.voteFinalizedToken = this.voteService.getVoteFinalizedToken();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
