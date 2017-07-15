import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Club } from "../../model/club";
import { ActivatedRoute, Router } from "@angular/router";

import { ClubService } from "../club.service";
import { GoogleMapCustomService } from "../../gmap.service";
import { CookieService } from "ngx-cookie";

declare const Twilio: any;

@Component ({
    selector: 'club-detail',
    templateUrl: './club-detail.component.html',
    styleUrls: ['./club-detail.component.scss'],
    providers: [
        ClubService,
        GoogleMapCustomService
    ],
})

export class ClubDetailComponent implements OnInit {
    club_selected: Club;
    id: number;

    lat: number = 0.00;
    lng: number = 0.00;

    constructor( private club_service: ClubService, private gmapcustomService: GoogleMapCustomService, private route:ActivatedRoute, private http: Http, private cookie_service: CookieService, private router:Router) { }

    ngOnInit() {

        if ( this.cookie_service.get('login_token') == null)
        {
            this.router.navigate(['Login']);
        }
        
       this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.club_service.getClub(this.id).then((se_club) => {
            this.club_selected = se_club;
        });
        
        let parent = this;

        let address = "Av. de Concha Espina, 1, 28036 Madrid, Spain";
        this.gmapcustomService.getLatLan(address, function(result) {
            parent.setGeoInfo(result.latitude,result.logitude);
        });
        console.log("Location : ");

        this.setupDevice();
    }

    setupDevice(): void {
        let url = 'api/angular/Call/Token';
        let body = "tokenRequired";
        this.http.post(url, body).toPromise().then((response) => {
            console.log(response.json().token);

            Twilio.Device.ready(function() {
                console.log("Twilio Device Ready");
            });

            /* Report any errors to the call status display */
            Twilio.Device.error(function (error) {
                console.log(error);
            });


            /* Callback for when Twilio Client initiates a new connection */
            Twilio.Device.connect(function (connection) {
                
                if ("phoneNumber" in connection.message) {
                } else {
                    // This is a call from a website user to a support agent
                }
            });

            /* Callback for when a call ends */
            Twilio.Device.disconnect(function(connection) {
                console.log(connection);
            });

            /* Callback for when Twilio Client receives a new incoming call */
            Twilio.Device.incoming(function (connection)  {
                

                // Set a callback to be executed when the connection is accepted
                connection.accept(function() {
                    
                });

            // Set a callback on the answer button and enable it
            
                connection.accept();
            });

            
            Twilio.Device.setup(response.json().token);
        });

            
    }

    setGeoInfo(latit:number,logit:number): void {
        this.lat = latit;
        this.lng = logit;
    }

    /* Call a customer from a support ticket */
    callCustomer(phoneNumber) {
        

        var params = {"phoneNumber": phoneNumber};
        Twilio.Device.connect(params);
    }

    /* Call the support_agent from the home page */
    callSupport() {
        

        // Our backend will assume that no params means a call to support_agent
        Twilio.Device.connect();
    }

    /* End a call */
    hangUp() {
        Twilio.Device.disconnectAll();
    }

}