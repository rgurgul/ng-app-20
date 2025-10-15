import { Component, inject } from '@angular/core';
import { CartStoreService } from '../../services/cart-store-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartStoreService = inject(CartStoreService);
  data = this.cartStoreService.state$;

  

}
