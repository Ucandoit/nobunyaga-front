import { Component, Input } from '@angular/core';

import { CustomCat } from '../../core/domains';

@Component({
  selector: 'cat-recap',
  styleUrls: [
    './cat-recap.component.css'
  ],
  templateUrl: 'cat-recap.component.html',
})
export class CatRecapComponent {

  @Input() public cat: CustomCat;

}