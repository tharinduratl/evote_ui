import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionResultsComponent } from './components/election-results/election-results.component';
import { ResultValidateComponent } from './components/result-validate/result-validate.component';
import { VoteResultsComponent } from './components/vote-results/vote-results.component';
import { VoteScreenComponent } from './components/vote-screen/vote-screen.component';
import { VoterLoginComponent } from './components/voter-login/voter-login.component';


const routes:Routes = [
  {path:'voter-login', component: VoterLoginComponent},
  {path:'vote', component: VoteScreenComponent},
  {path:'voted', component: VoteResultsComponent},
  {path:'election-results', component: ElectionResultsComponent},
  {path:'vote-validation', component: ResultValidateComponent},
  {path:'', redirectTo:'voter-login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
