import { Component,OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";

import { LoginService } from "../login.service";
import { CookieService } from "ngx-cookie";

@Component({
    selector: "login-angula",
    templateUrl: "./login.component.html",
    styleUrls: [
        "./login.component.scss"
    ],
    providers: [
        LoginService
    ]
})

export class LoginComponent implements OnInit {
    
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    email: string;
    pass: string;
    

    constructor( private login_serve: LoginService, private router: Router, private cookie_service: CookieService, private http: Http) {
        this.email = "";
        this.pass = "";
    }

    ngOnInit() {

    }

    LogIn() {
        console.log(this.email,this.pass);
        let request_data = {
            "email" :  this.email,
            "password" : this.pass
        };
        console.log(request_data);
        this.login_serve.login(request_data).then((response: Object) => {
            
            if ( response.hasOwnProperty('success') ) {
                this.cookie_service.put('login_token',response['success'].token);
                this.router.navigate(['players']);
                this.notify.emit("login");
            }
            else {
                console.log("Fail to Login");
            }
        });
    }

    Register() {
        this.router.navigate(['Register']);
    }

    GoogleSignIn() {
        this.login_serve.googleSignIn().then((response: Object) => {
            console.log(response);
        });
    }

    SendSMS() {
        let url = "api/angular/sendSMS";
        this.http.get(url)
        .toPromise()
        .then(() => {
            
        });
        
    }
}