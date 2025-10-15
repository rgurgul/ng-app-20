import { effect, inject, Injectable } from '@angular/core';
import { State, StateAction } from '../../shared/services/state';
import { CartItemModel } from '../../shared/types/store.types';
import { Utils } from '../../shared/utils/array-utils';
import { CartIDBService } from '../../shared/services/cart.api.idb.service';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService extends State<CartItemModel[]> {
  idb = inject(CartIDBService);
  override dispatch({ type, payload }: StateAction<any, any>): void {
    switch (type) {
      case 'add':
        const data = Utils.increaseParam(super.state$(), payload, 'count');
        super.setState(data);
        break;
      default:
        break;
    }
  }
  constructor() {
    super([]);
    effect(()=>{
      //console.log('store', this.state$());
      this.idb.update(this.state$())
    })
    this.idb.get().then((data)=>{
      super.setState(data as any);
    });
  }
}
