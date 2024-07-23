import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstallService {
  isInstalled$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isInstalled$.next(true);
  }

  changeInstalled(value: boolean) {
    this.isInstalled$.next(value);
  }
}
