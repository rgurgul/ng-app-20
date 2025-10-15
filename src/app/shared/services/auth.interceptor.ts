import { HttpInterceptorFn, HttpResponseBase } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token') || '';

  const reqClone = req.clone({ setHeaders: { authorization: token } });
  return next(reqClone).pipe(
    tap((ev: any) => {
      if (ev instanceof HttpResponseBase) {
        //setTimeout(() => coreService.isLoading.set(false), 600)
      } else {
        // coreService.isLoading.set(true)
      }
    }),
    catchError((err: any) => {
      alert(JSON.stringify(err, null, 4));
      return throwError(() => err);
    })
  );
};
