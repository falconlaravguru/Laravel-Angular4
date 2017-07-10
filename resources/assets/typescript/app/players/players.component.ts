import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Player } from "../model/player";

import { StarService } from "../star.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [
    StarService
  ],
})
export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;
  constructor( private starService: StarService , private router:Router) { }

  ngOnInit() {
    this.getPlayerList();
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
    this.router.navigate(['detail',selectedPlayer.id]);
  }
  
  OnAddPlayer(): void {
    alert("add player");
    this.router.navigate(['AddPlayer']);
  }

}
