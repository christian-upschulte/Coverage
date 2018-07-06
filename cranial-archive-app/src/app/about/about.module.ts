import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {AboutComponent} from "./about.component";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [AboutComponent],
  entryComponents: [AboutComponent],
})
export class AboutModule { }
