import { Routes } from '@angular/router';
import { Items } from './pages/components/items/items';
import { Cart } from './pages/components/cart/cart';
import { Workers } from './pages/components/workers/workers';

export const routes: Routes = [
  { path: 'items', component: Items },
  { path: 'workers', component: Workers },
  { path: 'cart', component: Cart },
];
