import { Component, Input } from '@angular/core';

import { Router } from "@angular/router";

import { LoginService } from "./login.service";
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [
    LoginService,
    CookieService
  ]
})
export class AppComponent {
  @Input() 
  title = 'SoccerStar';

  first:boolean=true;
  second:boolean=false;
  third:boolean=false;

  login_check:boolean=false;

  constructor(private login_service: LoginService, private cookie_service: CookieService, private router: Router) {
    let token = this.cookie_service.get('login_token');
    if (token == null) {
      this.login_check = false;
    } else {
      this.login_check = true;
    }
  }

  ngOnInit() {
    let token = this.cookie_service.get('login_token');
    if (token == null) {
      this.login_check = false;
    } else {
      this.login_check = true;
    }
  }

  ngDoCheck() {
    let token = this.cookie_service.get('login_token');
    if (token == null) {
      this.login_check = false;
    } else {
      this.login_check = true;
    }
  }

  logout() {
    this.login_service.logout();
    this.cookie_service.remove('login_token');
    this.login_check = false;
    this.router.navigate(['']); 
  }

  setActive(id: number) {
    if( id == 1)
    {
        this.first=true;
        this.second=false;
        this.third=false;
    }
    if( id == 2)
    {
        this.first=false;
        this.second=true;
        this.third=false;
    }
    if( id == 3)
    {
        this.first=false;
        this.second=false;
        this.third=true;
    }
  }
}
