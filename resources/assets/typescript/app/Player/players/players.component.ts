import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Player } from "../../model/player";
/**
 * Service Package
 */
import { StarService } from "../star.service";
import { CookieService } from "ngx-cookie";


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [
    StarService,
    CookieService
  ],
})
export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;
  constructor( private starService: StarService , private router:Router, private cookie_service: CookieService) { }

  ngOnInit() {
    this.getPlayerList();
    console.log(this.cookie_service.get('login_token'));
    if ( this.cookie_service.get('login_token') == null)
    {
        this.router.navigate(['Login']);
    }
  }

  getPlayerList(): void {
      this.starService.getPlayers().then((players) => {
        console.log("Hello\n");
        console.log(players);
        this.players = players;
      })
  }

  onSelected(selectedPlayer: Player): void {
    alert("selected");
    this.router.navigate(['player-detail',selectedPlayer.id]);
  }
  
  OnAddPlayer(): void {
    alert("add player");
    let id = 0;
    this.router.navigate(['Player-Add', id]);
  }
  OnEdit(id: number): void {
    alert(id);
    this.router.navigate(['Player-Add',id]);
  }
  OnDelete(id: number): void {
    this.starService.delete(id);
  }

}
