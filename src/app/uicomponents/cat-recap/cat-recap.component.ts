import { Component, Input } from '@angular/core';

import { CustomCat } from '../../core/data';

@Component({
  selector: 'cat-recap',
  templateUrl: 'cat-recap.component.html'
})
export class CatRecapComponent {

  @Input() public cat: CustomCat;

}