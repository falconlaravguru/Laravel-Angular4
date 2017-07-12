import { NgModule } from "@angular/core";

import { RouterModule,Routes } from "@angular/router";

import { PlayersComponent } from "./players/players.component";
import { PlayerDetailComponent } from "./player-detail/player-detail.component";
import { PlayerOperationComponent } from "./player-operation/player-operation.component";
import { LoginComponent } from "./login/login.component";

//Routing Variable
const routes:Routes = [
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'detail/:id',
        component: PlayerDetailComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'AddPlayer/:id',
        component: PlayerOperationComponent
    }
]


@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}