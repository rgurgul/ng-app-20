import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { AuthDataModel } from '../../../shared/types/services.types';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule, MatButton],
  template: `
    <div>
    <!--   {{ f.value | json }}
      {{ f.valid }}
      {{ f.submitted }} -->
      
      @if (authService.access()) {
        <button matButton="tonal" (click)="authService.logOut()">logout</button>
      } @else {
        <form #f="ngForm" class="m-1" (submit)="onSubmit(f.value)">
        <input
          type="text"
          class="border p-1 bg-green-200 rounded-md"
          name="username"
          ngModel="admin@localhost"
          required
        />
        <input
          type="text"
          class="border p-1 bg-green-200 rounded-md"
          name="password"
          ngModel="Admin1"
          required
        />
        <button matButton="filled"  [disabled]="!f.valid">login</button>
      </form>
      }
    </div>
  `,
  styles: ``,
})
export class AuthComponent {
  
  authService = inject(AuthService);

  onSubmit(arg0: AuthDataModel) {
    this.authService.logIn(arg0);
  }
}
