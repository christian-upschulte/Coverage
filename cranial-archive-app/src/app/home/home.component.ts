import {Component, OnInit} from '@angular/core';
import {VideoService} from "../services/video.service";

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
      <div *ngFor="let video of videos">
        <a href="{{video.url}}">click me dad</a>

      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  standardEvents: string[];
  videos: VideoResponse[];
  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.standardEvents = [
      '2018 US Nationals - Columbus Ohio', '2018 Starcitygames Atlanta Open'
    ];
    this.getVideosByFormat('cube');
  }

  getVideosByFormat(format: string){
    this.videoService.getVideosByFormat(format).subscribe((result: VideoResponse[]) => {
       this.videos = result;
    });

  }

}
