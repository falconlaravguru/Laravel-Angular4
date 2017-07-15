import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { AppRoutingModule } from "./app-routing.module";
import { CookieModule } from "ngx-cookie";

import { AppComponent } from './app.component';

import { HomeComponent } from "./Home/Home.component";

import { PlayersComponent } from './Player/players/players.component';
import { PlayerDetailComponent } from "./Player/player-detail/player-detail.component";
import { PlayerOperationComponent } from "./Player/player-operation/player-operation.component";

import { ClubComponent } from "./Club/Clubs/club.component";
import { ClubDetailComponent } from "./Club/Club-Detail/club-detail.component";
import { ClubOperationComponent } from "./Club/Club-Operator/club-operation.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component"; 

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { CarouselModule } from 'angular2-carousel-ztw/carousel.module';

import { StarService } from "./Player/star.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    PlayerOperationComponent,
    ClubComponent,
    ClubDetailComponent,
    ClubOperationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDElmkJiFE0jDurWkUzGun0yNKS2NAxZu8'
    }),
    MultiselectDropdownModule,
    CookieModule.forRoot(),
    CarouselModule
  ],
  providers: [StarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
