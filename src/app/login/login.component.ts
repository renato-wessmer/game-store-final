import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: string;
  password!: string;

  constructor(private _loginService: LoginService, private _router: Router) { }

  doLogin() {
    this._loginService.login(this.user, this.password);
    this._router.navigate(['/restrict/list']);
    this._loginService.setShowMenu(false);
  }

}
