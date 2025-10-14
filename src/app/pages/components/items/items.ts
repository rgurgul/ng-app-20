import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { Grid } from '../../../shared/components/grid/grid';
import { ItemsService } from '../../services/items.service';
import { ItemModel } from '../../../shared/types/services.types';
import { CommonModule, DatePipeConfig } from '@angular/common';
import { DataGridRowConfig, FieldTypes } from '../../../shared/types/data-grid.types';

type itemsKeys = 'title' | 'price' | 'imgSrc';

@Component({
  selector: 'app-items',
  imports: [Search, Grid, CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  itemsService = inject(ItemsService);
  total!: number;
  items = signal<ItemModel[]>([]);
  gConfig: DataGridRowConfig<itemsKeys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type:FieldTypes.BUTTON,header:'remove'},
    { type:FieldTypes.BUTTON,header:'more'},
  ];

  constructor() {
    this.itemsService.fetch().subscribe((resp) => {
      this.items.set(resp.data);
      this.total = resp.total;
    });
  }
}
