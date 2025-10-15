import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, input, OnDestroy, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { filter, first, map, skip } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements AfterViewInit {
  form = viewChild<NgForm>('f');
  controls: any = input.required();

  ngAfterViewInit(): void {
    this.form()
      ?.valueChanges?.pipe(
        /* map((value) => {
          return { ...value, date: Date.now() };
        }) */
        /* filter((value) => {
          if (JSON.stringify(value).includes('dupa')) {
            alert('sam jestes dupa');
          }
          return true;
        }), */
        skip(2)
      )
      ?.subscribe((value) => {
        console.log(value);
      });
  }
}
