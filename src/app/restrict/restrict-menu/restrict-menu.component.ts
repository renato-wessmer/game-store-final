import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-restrict-menu',
  templateUrl: './restrict-menu.component.html',
  styleUrls: ['./restrict-menu.component.css']
})
export class RestrictMenuComponent {

  constructor( private _router: Router,private _loginService:LoginService){} 
  
  logout(){
    localStorage.clear();
    this._loginService.setShowMenu(true);
    this._router.navigate(['/login']);
  }
  
}
