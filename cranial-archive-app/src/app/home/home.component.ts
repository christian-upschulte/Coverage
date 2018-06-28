import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="app-home_title">
      Cranial Archive
    </div>

    <div class="app-home_content-container">
      <mat-card class="app-home_standard-container">
        <mat-toolbar class="app-home_standard-header">Standard Events</mat-toolbar>
        <mat-card-content class="app-home_standard-content">
          <li *ngFor="let event of standardEvents">
            {{event}}
          </li>
        </mat-card-content>
      </mat-card>
      <iframe src="http://player.twitch.tv/?channel=magic" class="app-home_stream-viewer"></iframe>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  standardEvents: string[];
  constructor() {
  }

  ngOnInit() {
    this.standardEvents = [
      '2018 US Nationals - Columbus Ohio', '2018 Starcitygames Atlanta Open'
    ]
  }

}
