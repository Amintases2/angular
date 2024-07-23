import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

let isRefreshing = false;

export function authInterceptorFn(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const token = authService.accessToken;

  if (!token) {
    return next(req);
  }

  if (isRefreshing) {
    return refreshAndProceed(authService, req, next);
  }

  return next(addToken(req, token)).pipe(
    catchError((err) => {
      if (err.status === 403) {
        return refreshAndProceed(authService, req, next);
      }

      return throwError(() => err);
    })
  );
}

function refreshAndProceed(
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) {
  if (!isRefreshing) {
    isRefreshing = true;

    return authService.refreshAuthToken().pipe(
      switchMap((res) => {
        isRefreshing = false;
        return next(addToken(req, res.access_token));
      })
    );
  }
  return next(addToken(req, authService.refreshToken));
}

function addToken(req: HttpRequest<any>, token: string | null) {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
