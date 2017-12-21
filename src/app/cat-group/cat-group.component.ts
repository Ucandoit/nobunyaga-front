import {
    Component,
    OnInit
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCat } from '../core/data';
  
  @Component({
    selector: 'cat-group',
    styles: [`
    `],
    templateUrl: './cat-group.component.html' 
  })
  export class CatGroupComponent implements OnInit {
  
    public localState: any;
    public cat: CustomCat = {
        id: 1,
        name: 'ZZZ',
        avatar: 'http://210.140.157.227/img/card/still/character_still_00128_336619415.png',
        cost: 2.0,
        propertyId: 1,
        rarityId: 1,
        militaryClassId: 1,
        jobId: 1
    };
    
    constructor(
      public route: ActivatedRoute
    ) {}
  
    public ngOnInit() {
      this.route
        .data
        .subscribe((data: any) => {
          /**
           * Your resolved data from route.
           */
          this.localState = data.yourData;
        });
  
      console.log('hello `CatGroup` component');
      /**
       * static data that is bundled
       * var mockData = require('assets/mock-data/mock-data.json');
       * console.log('mockData', mockData);
       * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
       */
      this.asyncDataWithWebpack();
    }
    private asyncDataWithWebpack() {
      /**
       * you can also async load mock data with 'es6-promise-loader'
       * you would do this if you don't want the mock-data bundled
       * remember that 'es6-promise-loader' is a promise
       */
      setTimeout(() => {
  
        System.import('../../assets/mock-data/mock-data.json')
          .then((json) => {
            console.log('async mockData', json);
            this.localState = json;
          });
  
      });
    }
  
  }
  