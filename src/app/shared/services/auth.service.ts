import { inject, Injectable, signal } from '@angular/core';
import { AuthDataModel, AuthServiceModel, HttpResponseModel } from '../types/services.types';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthServiceModel {
  http = inject(HttpClient);
  private _access = signal(false);
  public get access() {
    return this._access.asReadonly();
  }
  constructor() {
    this.logged();
  }

  logged(): void {
    this.http.get<any>(Api.LOGGED_END_POINT).subscribe((resp) => {
      resp.warning ? this.logOut() : this._access.set(true);
    });
  }
  logIn(value: AuthDataModel): void {
    this.http.post<any>(Api.LOGIN_END_POINT, value).subscribe(({ data: { accessToken } }) => {
      this._access.set(true);
      localStorage.setItem('token', accessToken);
    });
  }
  logOut(): void {
    this._access.set(false);
    localStorage.removeItem('token');
  }
}
