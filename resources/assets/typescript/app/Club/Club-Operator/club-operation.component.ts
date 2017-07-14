import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ClubService } from "../club.service";

import { Club } from "../../model/club";
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'club-operator',
  templateUrl: './club-operation.component.html',
  styleUrls: ['./club-operation.component.scss'],
  providers: [
    ClubService
  ],
})
export class ClubOperationComponent implements OnInit {

    clubNew = new Club();

    city_options: number[] = [];
    country_options: number[] = [];
    league_options: number[] = [];
    count: number = 0;
   

    id: number;
    checkAdOrEd: boolean = false;

    // Settings configuration
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
    CountryOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Spain' },
        { id: 2, name: 'England' },
        { id: 3, name: 'Deutschland' },
        { id: 4, name: 'France' },
        { id: 5, name: 'Italy' },
    ];
    // Option Value - Player Role
    CityOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Madrid' },
        { id: 2, name: 'London' },
        { id: 3, name: 'Manchester' },
        { id: 4, name: 'Catalonia' },
        { id: 5, name: 'Liverpool' },
        { id: 6, name: 'Munich' },
        { id: 7, name: 'Turin' }
    ];
    
    LeagueOptions: IMultiSelectOption[] = [
        { id: 1, name: 'La Liga' },
        { id: 2, name: 'Premier League' },
        { id: 3, name: 'Bundesliga' },
        { id: 4, name: 'Serie A' },
    ];

    /**
     * When choose the player info from dropdown, set this class property - playerNew with choosen info
     * @param something 
     * Return: void 
     * Feature: Set playerNew - this class property with choosen info
     */
    OnItemSelect (something: string): void {
        
        if (this.country_options.length > 0 ) {
          this.clubNew.country = this.country_options[0].toString();  
        }

        if (this.city_options.length > 0 ) {
          this.clubNew.city = this.city_options[0].toString();
        }

        if (this.league_options.length > 0 ) {
          this.clubNew.league = this.league_options[0].toString();  
        }
        
        console.log(this.clubNew);
        something = "Why";
        this.checkAdOrEd = false;
    }
 
    constructor( private club_service: ClubService, private route:ActivatedRoute, private router:Router) { }
    
    /**
     * Feature: Check Add a player or Update a player with id
     * After checking it, set playerNew with selected player Info.
     */
    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        if ( this.id != 0)
        {
          this.club_service.getClub(this.id).then((se_club) => {
              console.log(se_club);
              this.country_options = [ +se_club.country_id ];
              this.city_options = [ +se_club.city_id ];
              this.league_options = [ +se_club.league_id ];
              this.clubNew.name = se_club.name;
              this.clubNew.count = se_club.count;
              this.clubNew.id = se_club.id;
          });
          this.checkAdOrEd = true;
        }
    }

    add_club() {
          if (this.country_options.length > 0 ) {
            this.clubNew.country = this.country_options[0].toString();  
          }

          if (this.city_options.length > 0 ) {
            this.clubNew.city = this.city_options[0].toString();
          }

          if (this.league_options.length > 0 ) {
            this.clubNew.league = this.league_options[0].toString();  
          }
        this.club_service.create(this.clubNew).then((resp) => {
          console.log(resp);
          this.router.navigate(['clubs']);
        });
    }

    update_club() {
        console.log(this.clubNew.id);

        if (this.country_options.length > 0 ) {
          this.clubNew.country = this.country_options[0].toString();  
        }

        if (this.city_options.length > 0 ) {
          this.clubNew.city = this.city_options[0].toString();
        }

        if (this.league_options.length > 0 ) {
          this.clubNew.league = this.league_options[0].toString();  
        }
      this.club_service.update(this.clubNew).then((resp) => {
        console.log(resp);
        this.router.navigate(['clubs']);
      });
    }
}
