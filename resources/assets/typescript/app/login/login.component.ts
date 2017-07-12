import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../login.service";

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
    
    email: string;
    pass: string;

    constructor( private login_serve: LoginService, private router: Router) {
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
            console.log(response);
            if ( response.hasOwnProperty('success') ) {
                this.router.navigate(['players']);
            }
            else {
                console.log("Fail to Login");
            }
        });
    }

    Register() {
        this.router.navigate(['Register']);
    }
}