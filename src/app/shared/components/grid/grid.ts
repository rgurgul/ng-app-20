import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [CommonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {
  change = output<any>();
  data: any = input.required();
  config: any = input.required();
  
  onClick(type: any, data: any) {
    this.change.emit({ type, data });
  }
}
