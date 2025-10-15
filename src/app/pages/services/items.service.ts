import { inject, Injectable } from '@angular/core';
import { HttpResponseModel, HttpServiceModel } from '../../shared/types/services.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../shared/utils/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {
  
  http = inject(HttpClient);

  fetch(params?: { [key: string]: any; }): Observable<HttpResponseModel> {
    return this.http.get<HttpResponseModel>(Api.ITEMS_END_POINT, {params});
  }
  get(id: number): Observable<any> {
    return this.http.get<HttpResponseModel>(Api.ITEMS_END_POINT + "/" + id);
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Observable<any> {
    return this.http.delete(Api.ITEMS_END_POINT + "/" + id);
  }
  
}
