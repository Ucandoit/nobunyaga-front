import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './custom-cat.routes';
import { CustomCatComponent } from './custom-cat.component';
import { CustomCatListComponent } from './custom-cat-list';
import { CustomCatEditComponent } from './custom-cat-edit';

console.log('`CustomCat` bundle loaded asynchronously');

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CustomCatComponent,
    CustomCatListComponent,
    CustomCatEditComponent
  ]
})
export class CustomCatModule {
  public static routes = routes;
}
