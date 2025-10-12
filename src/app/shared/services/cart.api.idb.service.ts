import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { ItemModel } from '../types/services.types';


enum Cart {
  DBName = 'CART_DB',
  ObjectStore = 'CART_ITEMS',
  ObjectKey = 'ITEMS',
}

interface CartDB extends DBSchema {
  [Cart.ObjectStore]: {
    key: string;
    value: any[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class CartIDBService {
  private db!: IDBPDatabase<CartDB>;

  private async connectDB() {
    this.db = await openDB<CartDB>(Cart.DBName, 1, {
      upgrade(db:any, version:any) {
        db.createObjectStore(Cart.ObjectStore);
      },
    });
  }

  async get() {
    await this.connectDB();
    return this.db.get(Cart.ObjectStore, Cart.ObjectKey);
  }

  async update(payload :ItemModel[]): Promise<any> {
    await this.connectDB();
    return this.db.put(Cart.ObjectStore, payload, Cart.ObjectKey);
  }
}
