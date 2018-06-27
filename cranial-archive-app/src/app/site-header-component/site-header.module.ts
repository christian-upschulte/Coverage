import { SiteHeaderComponent } from './site-header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    SiteHeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [SiteHeaderComponent],
  entryComponents: [SiteHeaderComponent],
})
export class SiteHeaderModule { }
