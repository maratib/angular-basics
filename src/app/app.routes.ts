import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { IframeComponent } from './iframe/iframe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'iframe', component: IframeComponent },
];
