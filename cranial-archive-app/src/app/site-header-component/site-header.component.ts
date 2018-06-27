import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  template: `
    <mat-toolbar class="site-header mat-elevation-z6">
      <div class="site-header_element-container">
        <div class="site-header_home-button-container">
         <a routerLink="home" routerLinkActive="active">
          <button mat-button class="site-header_home-button">Home</button>
         </a>
        </div>
      </div>
      <div class="site-header_about-button-container">
         <a routerLink="/about" routerLinkActive="active">
          <button mat-button class="site-header_about-button">About</button>
         </a>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
