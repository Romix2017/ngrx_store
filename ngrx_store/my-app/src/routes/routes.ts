import { Items } from '../items/items.components';
import { Widgets } from '../widgets/widgets.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Items },
  { path: 'items', component: Items },
  { path: 'widgets', component: Widgets },
  { path: '*', component: Items }
];
