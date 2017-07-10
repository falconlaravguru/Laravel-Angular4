import { Component, OnInit } from '@angular/core';

import { StarService } from "../star.service";

import { Player } from "../model/Player";
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

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

    optionsModel: number[] = [1, 2];

    // Settings configuration
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };

    // Text configuration
    myTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };

    // Labels / Parents
    myOptions: IMultiSelectOption[] = [
        { id: 1, name: 'versatile' },
        { id: 2, name: 'dribble' },
        { id: 3, name: 'shoot' },
        { id: 4, name: 'speed' },
        { id: 5, name: 'pass' },
        { id: 6, name: 'technical' },
        { id: 7, name: 'power' },
        { id: 8, name: 'trackle' },
        { id: 9, name: 'snap' }
    ];

    OnItemSelect () {
        console.log(this.optionsModel);
    }

    OnItemDeSelect() {
      console.log(this.optionsModel);
    }
 
    constructor( ) { }

    ngOnInit() {
        
    }

    add_player() {
      
    }
}
