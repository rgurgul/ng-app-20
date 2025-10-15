import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { Grid } from '../../../shared/components/grid/grid';
import { ItemsService } from '../../services/items.service';
import { ItemModel } from '../../../shared/types/services.types';
import { CommonModule, DatePipeConfig } from '@angular/common';
import { DataGridRowConfig, FieldTypes } from '../../../shared/types/data-grid.types';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

type itemsKeys = 'title' | 'price' | 'imgSrc';

@Component({
  selector: 'app-items',
  imports: [Search, Grid, CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  router = inject(Router);

  gridAction($event: any) {
    switch ($event.type) {
      case 'remove':
        this.itemsService.remove($event.data.id).subscribe((resp: any) => {
          this.fetchItems();
        });
        break;

      case 'more':
        this.router.navigate(['items', $event.data.id]);
        break;

      default:
        break;
    }
  }
  itemsService = inject(ItemsService);
  total!: number;
  items = signal<ItemModel[]>([]);
  gConfig: DataGridRowConfig<itemsKeys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: 'remove' },
    { type: FieldTypes.BUTTON, header: 'more' },
  ];

  constructor() {
    this.fetchItems();
  }

  private fetchItems() {
    this.itemsService.fetch().subscribe((resp) => {
      this.items.set(resp.data);
      this.total = resp.total;
    });
  }
}
