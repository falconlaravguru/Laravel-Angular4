import { Component,OnInit } from "@angular/core";

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

    constructor( private login_serve: LoginService) {
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
        this.login_serve.login(request_data).then(() => {

        });
    }
}