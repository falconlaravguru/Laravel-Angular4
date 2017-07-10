import { Component, OnInit } from '@angular/core';

import { Player } from "../model/player";
import { ActivatedRoute } from "@angular/router";

import { StarService } from "../star.service";
import { GoogleMapCustomService } from "../gmap.service";

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

    constructor( private starService: StarService, private gmapcustomService: GoogleMapCustomService, private route:ActivatedRoute) { }

    ngOnInit() {
        
       this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.starService.getPlayer(this.id).then((player) => {
            this.player_selected = player;
            
            console.log(this.player_selected);
        });
        
        let parent = this;

        let address = "Av. de Concha Espina, 1, 28036 Madrid, Spain";
        this.gmapcustomService.getLatLan(address, function(result) {
            parent.setGeoInfo(result.latitude,result.logitude);
        });
        console.log("Location : ");
    }

    setGeoInfo(latit:number,logit:number): void {
        this.lat = latit;
        this.lng = logit;
    }

}