import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    RouterModule
  ],
  exports: [HomeComponent],
  entryComponents: [HomeComponent],
})
export class HomeModule { }
