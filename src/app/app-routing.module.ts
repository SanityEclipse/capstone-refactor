import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NewGameModule } from './new-game/new-game.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'new-game',
    pathMatch: 'full',
    data: {}
  }
];

@NgModule({
  imports: [
    NewGameModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
