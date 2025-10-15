import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/utils/custom-validators';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
   <div class="flex gap-8">
      <form [formGroup]="form">
        <input type="text" class="bg-green-200 p-2" formControlName="username">
        <br>
        {{form.get('username')?.errors| json}}
        <hr>
        <input type="date" formControlName="birthDate">
        <br>
        {{form.get('birthDate')?.errors| json}}
        <hr>
        <div formGroupName="hobbies">
          <!-- {{form.get('hobbies')?.value |json}} -->
           @for (item of form.get('hobbies')?.value | keyvalue; track $index) {
            {{item.key}}
             <input type="checkbox" formControlName="{{item.key}}">
           }
           {{form.get('hobbies')?.errors| json}}
        </div>
      </form>
      <pre>{{form.value | json}}</pre>
   </div>
  `
})
export class Register {
  form = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    birthDate: new FormControl(null, [Validators.required, CustomValidators.DateShoulddBePassed]),
    hobbies: new FormGroup({
      tv: new FormControl(),
      yt: new FormControl(),
      fishing: new FormControl(),
      discoPolo: new FormControl()
    }, CustomValidators.atLeastOneShouldBeSelected)
  })
}
