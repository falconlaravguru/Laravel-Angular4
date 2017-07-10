import { NgModule } from "@angular/core";

import { RouterModule,Routes } from "@angular/router";

import { PlayersComponent } from "./players/players.component";
import { PlayerDetailComponent } from "./player-detail/player-detail.component";
import { PlayerOperationComponent } from "./player-operation/player-operation.component";

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
        component: PlayersComponent
    },
    {
        path: 'AddPlayer',
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