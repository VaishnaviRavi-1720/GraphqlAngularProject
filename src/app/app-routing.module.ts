import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent
  },
  {
    path:'players', component:PlayersComponent
  },
  {
    path:'ranking', component:RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
