import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LH Games';
  showMenu: boolean = true;

  constructor(private _loginService: LoginService) {  }

  ngOnInit(): void {
    this._loginService.getShowMenu().subscribe(
      res => { 
        this.showMenu = res;
      }
    )
  }

  ngOnDestroy() { 
    localStorage.clear();
  }

}
