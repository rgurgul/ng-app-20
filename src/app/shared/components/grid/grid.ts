import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [CommonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css'
})
export class Grid {
  data:any = input.required()
}
