import { Routes } from '@angular/router';
import { Items } from './pages/components/items/items';
import { Cart } from './pages/components/cart/cart';
import { Workers } from './pages/components/workers/workers';
import { ItemDetails } from './pages/components/items/item-details/item-details';
import { authGuard } from './shared/auth-guard';

export const routes: Routes = [
  { path: 'items', component: Items },
  { path: 'items/:id', canActivate:[authGuard], component: ItemDetails },
  { path: 'workers', component: Workers },
  { path: 'cart', component: Cart },
];
