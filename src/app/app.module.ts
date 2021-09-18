import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VoteResultsComponent } from './components/vote-results/vote-results.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';
import { VoterLoginComponent } from './components/voter-login/voter-login.component';
import { VoteScreenComponent } from './components/vote-screen/vote-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { ElectionResultsComponent } from './components/election-results/election-results.component';
import { ResultValidateComponent } from './components/result-validate/result-validate.component';
import { DevInfoComponent } from './components/dev-info/dev-info.component';


@NgModule({
  declarations: [
    AppComponent,
    VoterLoginComponent,
    VoteScreenComponent,
    VoteResultsComponent,
    HeaderComponent,
    ElectionResultsComponent,
    ResultValidateComponent,
    DevInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
