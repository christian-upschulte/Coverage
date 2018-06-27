import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [HomeComponent],
  entryComponents: [HomeComponent],
})
export class HomeModule { }
