import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../login.service";

@Component({
    selector: "register-temp",
    templateUrl: "./register.component.html",
    styleUrls: [
        "./register.component.scss"
    ],
    providers: [
        LoginService
    ]
})

export class RegisterComponent implements OnInit {

    name: string;
    email: string;
    password: string;
    c_password: string;

    constructor( private loginServe: LoginService, private router: Router) {}


    ngOnInit() {

    }

    register() {
        let request_data = {
            "name": this.name,
            "email": this.email,
            "password": this.password,
            "c_password": this.c_password
        }
        console.log(request_data);
        console.log("register - Componenet");
        this.loginServe.register(request_data).then((response) => {
            console.log(response);
        });
    }

    cancel() {
        this.router.navigate(['Login']);
    }
}