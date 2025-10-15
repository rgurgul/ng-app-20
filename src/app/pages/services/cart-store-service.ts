import { Injectable } from '@angular/core';
import { State, StateAction } from '../../shared/services/state';
import { CartItemModel } from '../../shared/types/store.types';
import { Utils } from '../../shared/utils/array-utils';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService extends State<CartItemModel[]> {
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
  }
}
