import { Injectable } from '@angular/core';

import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Club } from "../model/club";
import { Player } from "../model/player";
import { Coach } from "../model/coach";

@Injectable()
export class ClubService {

  public players: Player[];
  public coaches: Coach[];
  public clubs: Club[];

  public clubsUrl: string = 'api/angular/clubs';
  public clubUrl: string = 'api/angular/club';
  public crt_Url: string = 'api/angular/club/create';
  public upt_Url: string = 'api/angular/club/update';
  public del_Url: string = 'api/angular/club/delete';
  public pop_Url: string = 'api/angular/getPOP';

  private headers = new Headers({
    "content-type": "application/json"
  });

  constructor(private http: Http) {  }

  private static handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
  }

  getClubs(): Promise<Club[]> {

      return this.http.get( this.clubsUrl )
      .toPromise()
      .then((response:Response) => {
        let clubs = [];
        let response_data = response.json();
        console.log(response_data);

        for (let club of response_data) {
          clubs.push(club);
        }
        console.log(clubs);
        return clubs;
      })
      .catch(ClubService.handleError);
  }

  getClub(id: number): Promise<Club> {
      
      let url = `${this.clubUrl}/${id}`;

      return this.http.get( url )
      .toPromise()
      .then((response) => {
        console.log(response);
        let club = response.json();
        return club;
      })
      .catch(ClubService.handleError);
  }

  getPopClub(): Promise<Club> {
    let url = `${this.pop_Url}`;

    return this.http.get( url)
    .toPromise()
    .then((response) => {
      console.log(response);
      let clubs = response.json();
      console.log(clubs);
      return clubs;
    })
    .catch(ClubService.handleError);
  }

  create(club_new: Club): Promise<void> {
    let url = `${this.crt_Url}`;

    return this.http.post(url, JSON.stringify(club_new), {headers: this.headers }).toPromise().then(() => null);
  }

  update(club_Edit: Club): Promise<void> {
    let url = `${this.upt_Url}/${club_Edit.id}`;

    return this.http.put(url, JSON.stringify(club_Edit), {headers: this.headers }).toPromise().then(() => null);
  }

  delete(id: number): Promise<void> {
    let url = `${this.del_Url}/${id}`;

    return this.http.delete(url, {headers: this.headers }).toPromise().then(() => null);
  }
}
