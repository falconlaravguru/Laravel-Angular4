import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StarService } from "../Player/star.service";
import { ClubService } from "../Club/club.service";

@Component({
    selector: "home",
    templateUrl: "./Home.component.html",
    styleUrls: [
        "./Home.component.scss"
    ],
    providers: [
        StarService,
        ClubService
    ]
})

export class HomeComponent implements OnInit {

    selectedImage;
    image_url: string = "http://localhost:8000/img/";
    match_images = [];
    soccer_images = [];
    club_images = [];
 
    constructor( private router: Router, private club_service: ClubService) {
        this.match_images = [
            {
                "url" : this.image_url + 'match/1.jpg',
                "title":"2017 UEFA FINAL",
                "caption":"Congratulations for Real Madrid trophy win"
            },
            {
                "url" : this.image_url + 'match/4.jpg',
                "title":"Real Madrid vs Atletico Madrid",
                "caption":"Absolutely Amazing"
            },
            {
                "url" : this.image_url + 'match/8.jpg',
                "title":"Real Madrid vs Bayern Munich",
                "caption":"6 - 2"
            },
            {
                "url" : this.image_url + 'match/16.jpg',
                "title":"FC Barca vs Paris-Saint German",
                "caption":"6 - 5"
            },
            {
                "url" : this.image_url + 'match/32.jpg',
                "title":"Who will be the winner of UEFA Champions League",
                "caption":"Cristiano Ronaldo, Lionel Messi or Antoine Greizmann"
            },
            {
                "url" : this.image_url + 'match/4-1.png',
                "title":"Real Madrid vs Atletico Madrid",
                "caption":"Cristiano Ronaldo and Antoine Greizmann"
            },
            {
                "url" : this.image_url + 'match/16-1.jpg',
                "title":"FC Barca vs Paris Saint-German",
                "caption":"Sergio Robert vs Draxkler"
            },
            {
                "url" : this.image_url + 'match/16-2.jpg',
                "title":"Falcao and Ozil",
                "caption":"Wonderful Striker and Organizer"
            },
        ];
        this.soccer_images = [
            {
                "url": this.image_url + 'SoccerPhoto/1.jpg',
                "name": "Cristiano Ronaldo",
                "age": 32,
                "club": "Real Madrid FC",
                "country": "Portugal",
                "id": 1
            },
            {
                "url": this.image_url + 'SoccerPhoto/2.jpg',
                "name": "Lionel Messi",
                "age": 30,
                "club": "FC Barcelona",
                "country": "Argentina",
                "id": 2
            },
            {
                "url": this.image_url + 'SoccerPhoto/3.jpg',
                "name": "Neymar Jr",
                "age": 25,
                "club": "FC Barcelona",
                "country": "Brazil",
                "id": 11
            },
            {
                "url": this.image_url + 'SoccerPhoto/4.jpg',
                "name": "Gareth Bale",
                "age": 27,
                "club": "Real Madrid FC",
                "country": "Wales",
                "id": 4
            }
        ];

        this.club_service.getPopClub()
        .then((response) => {
            console.log(response);
        });
    }

    ngOnInit() {

    }

    setSelectedImage(image){
        this.selectedImage= image;	
    }

    gotoPlayerDetail(id: number) {
        this.router.navigate(['player-detail', id]);
    }

    gotoClubDetail(id: number) {
        console.log(id);
        
    }
}