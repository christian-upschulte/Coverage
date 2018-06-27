import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // videoURL: string;
  // safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer){
    // this.videoURL = 'http://player.twitch.tv/?channel=magic';

  }

  ngOnInit() {
    // this.videoURL = 'http://player.twitch.tv/?channel=calebdmtg';
  }
}
