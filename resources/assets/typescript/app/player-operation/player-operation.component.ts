import { Component, OnInit } from '@angular/core';

import { StarService } from "../star.service";

@Component({
  selector: 'app-players',
  templateUrl: './player-operation.component.html',
  styleUrls: ['./player-operation.component.scss'],
  providers: [
    StarService
  ],
})
export class PlayerOperationComponent implements OnInit {

  
  constructor( ) { }

  ngOnInit() {

  }

}
