import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '@data/interface/auth.interface';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://icherniakov.ru/yt-course';
  accessToken: string | null = null;
  refreshToken: string | null = null;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.accessToken = null;
    this.refreshToken = null;
  }

  get isAuth(): boolean {
    if (!this.accessToken) {
      this.accessToken = this.cookieService.get('access_token');
      this.refreshToken = this.cookieService.get('refresh_token');
    }
    return !!this.accessToken;
  }

  login(payload: { username: string; password: string }) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http
      .post<TokenResponse>(`${this.baseUrl}/auth/token`, formData)
      .pipe(tap((res) => this.saveTokens(res)));
  }

  refreshAuthToken() {
    const data = { refresh_token: this.refreshToken };

    return this.http
      .post<TokenResponse>(`${this.baseUrl}/auth/refresh`, data)
      .pipe(
        tap((res) => {
          this.saveTokens(res);
        }),
        catchError((err) => {
          this.logout();

          return throwError(() => err);
        })
      );
  }

  logout() {
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');

    this.accessToken = null;
    this.refreshToken = null;

    this.router.navigate(['/login']);
  }

  saveTokens(res: TokenResponse) {
    this.accessToken = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookieService.set('access_token', res.access_token);
    this.cookieService.set('refresh_token', res.refresh_token);
  }
}
