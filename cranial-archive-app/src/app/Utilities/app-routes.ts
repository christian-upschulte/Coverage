import { Routes } from '@angular/router';
import {AppComponent} from "../app-component/app.component";
import {AboutComponent} from "../about-component/about.component";
import {HomeComponent} from "../home/home.component";

export const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  { path: 'home',
     component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];
