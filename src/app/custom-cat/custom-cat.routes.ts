import { CustomCatComponent } from './custom-cat.component';
import { CustomCatEditComponent } from './custom-cat-edit';

export const routes = [
  { path: '', component: CustomCatComponent,
    children: [
      { path: 'add', component: CustomCatEditComponent },
      { path: 'edit/:id', component: CustomCatEditComponent }
    ]
  },
];
