import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from "./player-detail/player-detail.component";
import { PlayerOperationComponent } from "./player-operation/player-operation.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { StarService } from "./star.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    PlayerOperationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDElmkJiFE0jDurWkUzGun0yNKS2NAxZu8'
    }),
    MultiselectDropdownModule
  ],
  providers: [StarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
