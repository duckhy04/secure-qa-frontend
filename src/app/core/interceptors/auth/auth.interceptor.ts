import { HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from '../../services/services';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(StorageService);
  const authToken = storageService.getToken();
  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next(authReq)
  }
  return next(req)
};
