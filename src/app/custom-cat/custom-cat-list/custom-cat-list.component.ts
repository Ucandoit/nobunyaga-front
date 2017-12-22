import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
import { CustomCat } from '../../core/domains';

  @Component({
    selector: 'custom-cat-list',
    templateUrl: './custom-cat-list.component.html',
  })
  export class CustomCatListComponent implements OnInit {

    @Input() public customCats: CustomCat[];

    public ngOnInit() {
      console.log('hello `CustomCatList` component');
    }

  }