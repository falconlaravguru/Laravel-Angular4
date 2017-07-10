import { Component, OnInit } from '@angular/core';

import { StarService } from "../star.service";

import { Player } from "../model/Player";



@Component({
  selector: 'player-operator',
  templateUrl: './player-operation.component.html',
  styleUrls: ['./player-operation.component.scss'],
  providers: [
    StarService
  ],
})
export class PlayerOperationComponent implements OnInit {

  playerNew = new Player();
  
  constructor( private st_service: StarService) { }

  ngOnInit() {

  }

  add_player() {
    let response = this.st_service.create(this.playerNew);
    console.log(response);
  }
}
