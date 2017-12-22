import {
    Component,
    OnInit,
    // Input
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCat } from '../../core/domains';

  @Component({
    selector: 'custom-cat-edit',
    templateUrl: './custom-cat-edit.component.html',
  })
  export class CustomCatEditComponent implements OnInit {

    constructor(private router: ActivatedRoute) { }

    // @Input() public add: boolean;

    public ngOnInit() {
      console.log('hello `CustomCatEdit` component');
      this.router.url.subscribe((data) => {
        console.log(data);
      });
    }

  }