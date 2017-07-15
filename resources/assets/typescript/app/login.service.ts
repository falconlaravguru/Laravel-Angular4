import { Injectable } from "@angular/core";

import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private headers = new Headers({
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "origin, content-type, accept, x-requested-with, sid, mycustom, smuser"
    });
    private loginUrl:string = "api/angular/login";
    private logoutUrl:string = "api/angular/logout";
    private registerUrl:string = "api/angular/register";
    private gsigninUrl:string = "api/angular/GoogleAuth";

    public logged_in:boolean = false;

    constructor( private http: Http ) {}

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
    
    login(request_data: any): Promise<Object> {
        let url = this.loginUrl;
        console.log(request_data);
        return this.http.post(url, JSON.stringify(request_data), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            if ( response.json().hasOwnProperty('success') ) {
                this.logged_in = true;
                console.log("123123123",this.logged_in);
            }
            console.log(this.logged_in);
            return response.json();

        }).catch(LoginService.handleError);
    }

    logout(): Promise<void> {
        let url = this.logoutUrl;
        return this.http.get(url)
        .toPromise()
        .then((response: Response) => {
            console.log(response);
            this.logged_in = false;
        }).catch(LoginService.handleError);
    }

    register(request_data): Promise<void> {
        console.log(request_data);
        console.log("Service");
        let url = this.registerUrl;
        return this.http.post(url, JSON.stringify(request_data), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            console.log(response);
            
        }).catch(LoginService.handleError);
    }

    googleSignIn(): Promise<Object> {
        let url = this.gsigninUrl;
        let headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true"); 
        
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        
        return this.http.get(url)
        .toPromise()
        .then((response: Response) => {
            let authUrl = response.json().authUrl;
            if (authUrl != null) {
                console.log(headers);
                // this.http.post(authUrl, { headers: headers })
                window.location.href = authUrl;
                // .toPromise()    
                // .then(() => {
                //     return null;
                // }).catch(LoginService.handleError);
            }
            return response.json();
        }).catch(LoginService.handleError);
    }

    checkout() {
        let url = "api/angular/login/checkout";

        this.http.get(url)
        .toPromise()
        .then((response) => {
            console.log(response);
        })
        .catch(LoginService.handleError);
    }

}