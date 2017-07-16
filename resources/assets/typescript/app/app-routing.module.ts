import { NgModule } from "@angular/core";

import { RouterModule,Routes } from "@angular/router";

import { PlayersComponent } from "./Player/players/players.component";
import { PlayerDetailComponent } from "./Player/player-detail/player-detail.component";
import { PlayerOperationComponent } from "./Player/player-operation/player-operation.component";

import { ClubComponent } from "./Club/Clubs/club.component";
import { ClubDetailComponent } from "./Club/Club-Detail/club-detail.component";
import { ClubOperationComponent } from "./Club/Club-Operator/club-operation.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { HomeComponent } from "./Home/Home.component";

//Routing Variable
const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'player-detail/:id',
        component: PlayerDetailComponent
    },
    {
        path: 'Player-Add/:id',
        component: PlayerOperationComponent
    },
    {
        path: 'clubs',
        component: ClubComponent
    },
    {
        path: 'club-detail/:id',
        component: ClubDetailComponent
    },
    {
        path: 'club-add/:id',
        component: ClubOperationComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'Register',
        component: RegisterComponent
    }
]


@NgModule ({
    imports: [
        RouterModule.forRoot(routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}