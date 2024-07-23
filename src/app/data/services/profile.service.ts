import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@data/interface/profile.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl = environment.domain;
  accounts$ = new BehaviorSubject<Profile[]>([]);
  sub: Subscription = new Subscription();

  constructor(private http: HttpClient) {
    this.sub = this.getTestAccounts().subscribe((res) => {
      this.accounts$.next(res);
    });
  }

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseUrl}/users`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseUrl}/account/me`);
  }

  deleteAccount(id: number) {
    const filteredAccounts = this.accounts$.value.filter((account) => {
      return account.id !== id;
    });

    this.accounts$.next(filteredAccounts);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
