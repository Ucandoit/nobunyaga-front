import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRecapComponent } from './cat-recap/cat-recap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CatRecapComponent
  ],
  exports: [
    CatRecapComponent
  ]
})

export class UIComponentModule {
    constructor() {
        console.log('`UIComponentModule` module initialized');
      }
}