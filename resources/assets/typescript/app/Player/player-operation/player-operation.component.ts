import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { StarService } from "../star.service";
import { CookieService } from "ngx-cookie";

import { Player } from "../../model/Player";
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'player-operator',
  templateUrl: './player-operation.component.html',
  styleUrls: ['./player-operation.component.scss'],
  providers: [
    StarService,
    CookieService
  ],
})
export class PlayerOperationComponent implements OnInit {

    playerNew = new Player();

    role_options: number[] = [];
    style_options: number[] = [];
    club_options: number[] = [];
    person_options: number[] = [];

    id: number;
    checkAdOrEd: boolean = false;

    // Settings configuration
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };

    singleSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default btn-block',
        selectionLimit: 1,
        autoUnselect: true,
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

    // Option Value - Player Style
    StyleOptions: IMultiSelectOption[] = [
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
    // Option Value - Player Role
    RoleOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Forward' },
        { id: 2, name: 'MidFielder' },
        { id: 3, name: 'CentreBack' }
    ];
    
    ClubOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Real Madrid' },
        { id: 2, name: 'Barcelona' },
        { id: 3, name: 'Bayern Munich' },
        { id: 4, name: 'Atletico Madrid' },
        { id: 5, name: 'Manchester United' },
        { id: 6, name: 'Chelsea' },
        { id: 7, name: 'Arsenal' },
        { id: 8, name: 'Juventus' },
        { id: 9, name: 'Liverpool' },
        { id: 10, name: 'Man city' },
        { id: 11, name: 'Leister city' }
    ];

    PersonalityOptions: IMultiSelectOption[] = [
        { id: 1, name: 'haughty' },
        { id: 2, name: 'modesty' },
        { id: 3, name: 'nervous' },
        { id: 4, name: 'Non-Definite' },
        { id: 5, name: 'Cunning' },
        { id: 6, name: 'despicable' },
        { id: 7, name: 'gentle' },
        { id: 8, name: 'enthusiastic' }
    ];

    /**
     * When choose the player info from dropdown, set this class property - playerNew with choosen info
     * @param something 
     * Return: void 
     * Feature: Set playerNew - this class property with choosen info
     */
    OnItemSelect (something: string): void {
        console.log(this.club_options);
        this.playerNew.style = this.style_options;
        if (this.club_options.length > 0 ) {
          this.playerNew.club = this.club_options[0].toString();  
        }

        if (this.role_options.length > 0 ) {
          this.playerNew.role = this.role_options[0].toString();
        }

        if (this.person_options.length > 0 ) {
          this.playerNew.personality = this.person_options[0].toString();  
        }
        
        console.log(this.playerNew);
        something = "Why";
        this.checkAdOrEd = false;
    }
 
    constructor( private st_service: StarService, private route:ActivatedRoute, private router:Router, private cookie_service:CookieService) { }
    
    /**
     * Feature: Check Add a player or Update a player with id
     * After checking it, set playerNew with selected player Info.
     */
    ngOnInit() {

        if ( this.cookie_service.get('login_token') == null)
        {
            this.router.navigate(['Login']);
        }

        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        if ( this.id != 0)
        {
          this.st_service.getPlayer(this.id).then((se_player) => {
              console.log(se_player);
              this.club_options = [ +se_player.club_id ];
              this.role_options = [ +se_player.role_id ];
              this.person_options = [ +se_player.personality_id ];
              let arr_styles = se_player.style;
              this.playerNew.name = se_player.name;
              this.playerNew.age = se_player.age;
              this.playerNew.id = se_player.id;

              for (let key in arr_styles) {
                  for ( let s_id in arr_styles[key]) {
                    console.log(arr_styles[key][s_id]);
                    this.style_options.push(+s_id);
                  }
              }
              console.log(this.style_options);
          });
          this.checkAdOrEd = true;
        }
    }

    add_player() {
        this.playerNew.style = this.style_options;
          if (this.club_options.length > 0 ) {
            this.playerNew.club = this.club_options[0].toString();  
          }

          if (this.role_options.length > 0 ) {
            this.playerNew.role = this.role_options[0].toString();
          }

          if (this.person_options.length > 0 ) {
            this.playerNew.personality = this.person_options[0].toString();  
          }
        this.st_service.create(this.playerNew).then((resp) => {
          console.log(resp);
          this.router.navigate(['players']);
        });
    }

    update_player() {
      console.log(this.playerNew.id);
      this.playerNew.style = this.style_options;
        if (this.club_options.length > 0 ) {
          this.playerNew.club = this.club_options[0].toString();  
        }

        if (this.role_options.length > 0 ) {
          this.playerNew.role = this.role_options[0].toString();
        }

        if (this.person_options.length > 0 ) {
          this.playerNew.personality = this.person_options[0].toString();  
        }
      this.st_service.update(this.playerNew).then((resp) => {
        console.log(resp);
        this.router.navigate(['players']);
      });
    }
}
