import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app-component/app.component';
import {SiteHeaderComponent} from "../site-header-component/site-header.component";
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {SiteHeaderModule} from "../site-header-component/site-header.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import {AboutModule} from "../about-component/about.module";
import {HomeModule} from "../home/home.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SiteHeaderModule,
    AboutModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
