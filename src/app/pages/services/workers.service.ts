import { inject, Injectable } from '@angular/core';

import { HttpServiceModel } from '../../shared/types/services.types';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Api } from '../../shared/utils/api';

 

@Injectable({

  providedIn: 'root'

})

export class WorkersService implements HttpServiceModel {

 

  http = inject(HttpClient);

 

  fetch(filters?: { [key: string]: any; }): Observable<any> {

    return this.http.get(Api.WORKERS_END_POINT)

  }

 

  get(id: number): Observable<any> {

    throw new Error('Method not implemented.');

  }

 

  add(item: any): Observable<any> {

    throw new Error('Method not implemented.');

  }

 

  update(item: any): Observable<any> {

    throw new Error('Method not implemented.');

  }

 

  remove(id: number): Observable<any> {

    throw new Error('Method not implemented.');

  }

 

}