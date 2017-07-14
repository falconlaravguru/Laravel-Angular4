import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Player } from "../../model/player";
import { ActivatedRoute } from "@angular/router";

import { StarService } from "../star.service";
import { GoogleMapCustomService } from "../../gmap.service";

declare const Twilio: any;

@Component ({
    selector: 'player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.scss'],
    providers: [
        StarService,
        GoogleMapCustomService
    ],
})

export class PlayerDetailComponent implements OnInit {
    player_selected: Player;
    id: number;

    lat: number = 0.00;
    lng: number = 0.00;

    constructor( private starService: StarService, private gmapcustomService: GoogleMapCustomService, private route:ActivatedRoute, private http: Http) { }

    ngOnInit() {
        
       this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.starService.getPlayer(this.id).then((se_player) => {
            this.player_selected = se_player;

            let arr_styles = this.player_selected.style;
            let temp_styles = '';

            for (var key in arr_styles) {
                let value = arr_styles[key];
                console.log(key,value);
                for ( var num in value ) {
                    let desc = value[num];
                    temp_styles += desc + ' ';
                }
            }

            this.player_selected.styles = temp_styles;
            console.log(this.player_selected);
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