import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hlf-test';
  votingDistrict = { name:'Colombo', code: '01'};
  votingSection = { name:'Colombo South', code: 'A'};
  votingCenter = { name:'Colombo South Voting Center 1', code: '1'};
}
