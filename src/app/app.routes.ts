import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CatGroupComponent } from './cat-group';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'custom-cat', loadChildren: './custom-cat#CustomCatModule' },
  { path: 'cat-group', component: CatGroupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
