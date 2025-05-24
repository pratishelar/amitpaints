import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaintingDetailsComponent } from './paintingDetails/paintingDetails.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paintings/:id', component: PaintingDetailsComponent },
];
