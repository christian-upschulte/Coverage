import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  template: `
    
    <app-site-header></app-site-header>
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit() {
  }
}
