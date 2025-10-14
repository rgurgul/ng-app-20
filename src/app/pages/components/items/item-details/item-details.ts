import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  imports: [CommonModule],
  template: `
    <pre>
      {{ data | async | json }}
    </pre>
  `,
  styles: ``,
})
export class ItemDetails {
  route = inject(ActivatedRoute);
  itemsService = inject(ItemsService);
  data!: Observable<any>;

  constructor() {
    this.route.params.subscribe(({ id }) => {
      //const id  = data['id'];
      //const { id } = data;
      console.log(id);
      this.data = this.itemsService.get(id);
    });
  }
}
