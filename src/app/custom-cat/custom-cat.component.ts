import {
    Component,
    OnInit,
  } from '@angular/core';
import { CustomCat } from 'app/core/domains';

  console.log('`CustomCat` component loaded asynchronously');

  @Component({
    selector: 'custom-cat',
    templateUrl: './custom-cat.component.html',
  })
  export class CustomCatComponent implements OnInit {

    public customCats: CustomCat[];

    public ngOnInit() {
      console.log('hello `CustomCat` component');

      setTimeout(() => {
        System.import('../../assets/mock-data/custom-cat-list.json')
          .then((json) => {
            console.log('custom cats mock', json);
            this.customCats = json;
          });
  
      });
    }

  }
