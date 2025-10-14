import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  imports: [],
  template: `
    <p>
      item-details works!
    </p>
  `,
  styles: ``
})
export class ItemDetails {

  route = inject(ActivatedRoute);

  constructor(){
    this.route.params.subscribe((data)=>{
      console.log(data);
    })
  }

}
