import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Club } from "../../model/club";

import { ClubService } from "../club.service";

@Component({
  selector: 'app-clubs',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
  providers: [
    ClubService
  ],
})
export class ClubComponent implements OnInit {

  clubs: Club[];
  selectedClub: Club;
  constructor( private club_service: ClubService , private router:Router) { }

  ngOnInit() {
    this.getClubList();
  }

  getClubList(): void {
      this.club_service.getClubs().then((clubs) => {
        console.log("Hello\n");
        console.log(clubs);
        this.clubs = clubs;
      })
  }

  onSelected(selectedClub: Club): void {
    console.log("123123123");
    console.log(selectedClub);
    this.router.navigate(['club-detail',selectedClub.id]);
  }
  
  OnAddClub(): void {
    let id = 0;
    this.router.navigate(['club-add', id]);
  }
  OnEdit(id: number): void {
    this.router.navigate(['club-add',id]);
  }
  OnDelete(id: number): void {
    this.club_service.delete(id);
  }

}
