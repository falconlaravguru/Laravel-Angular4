import { Injectable } from "@angular/core";

import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private headers = new Headers({
        "content-type": "application/json"
    });
    private loginUrl:string = "api/angular/login";
    private logoutUrl:string = "api/angular/logout";

    constructor( private http: Http ) {}

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
    
    login(request_data: any): Promise<void> {
        let url = this.loginUrl;
        console.log(request_data);
        return this.http.post(url, JSON.stringify(request_data), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            console.log(response);
        }).catch(LoginService.handleError);
    }

    logout(): Promise<void> {
        let url = this.logoutUrl;
        return this.http.get(url)
        .toPromise()
        .then((response: Response) => {
            console.log(response);
        }).catch(LoginService.handleError);
    }

}