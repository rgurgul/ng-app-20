import { Component, inject } from '@angular/core';
import { Search } from '../../../shared/components/search/search';
import { Grid } from '../../../shared/components/grid/grid';
import { ItemsService } from '../../services/items.service';
import { ItemModel } from '../../../shared/types/services.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [Search, Grid, CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  itemsService = inject(ItemsService);
  total!: number;
  items!: ItemModel[];

  constructor(){
    this.itemsService.fetch().subscribe((resp)=>{
      this.items = resp.data;
      this.total = resp.total;
    })
  }
}
