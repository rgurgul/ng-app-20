import { Component, effect, inject, signal } from '@angular/core';

import { WorkersService } from '../../services/workers.service';

import { JsonPipe } from '@angular/common';

import { Grid } from '../../../shared/components/grid/grid';

import { DataGridRowConfig, FieldTypes } from '../../../shared/types/data-grid.types';
import { Search } from '../../../shared/components/search/search';

@Component({
  selector: 'app-workers',

  imports: [JsonPipe, Grid, Search],

  templateUrl: './workers.html',

  styleUrl: './workers.css',
})
export class Workers {
  filters = signal({ name: '', phone: '' });
  changeHandler($event: any) {
    this.filters.update((value) => {
      return { ...value, ...$event };
    });
  }

  workersService = inject(WorkersService);

  workers: any;

  gConfig: DataGridRowConfig<any>[] = [{ key: 'name' }];

  constructor() {
    this.workersService.fetch().subscribe((resp) => {
      console.log(resp);
      this.workers = resp.data;
    });

    effect(()=>{
      console.log(this.filters());
    })
  }
}
