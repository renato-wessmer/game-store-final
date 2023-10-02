import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  shoMenu = new Subject<boolean>();

  constructor() { }

  login(user: string, password: string): void {
    if (user == "student" && password == "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.shoMenu.next(false);
    } else {
      this.shoMenu.next(true);
    }
  }

  setShowMenu(value: boolean) {
    this.shoMenu.next(value);
  }

  getShowMenu() {
    return this.shoMenu.asObservable();
  }
}
