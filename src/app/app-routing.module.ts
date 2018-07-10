import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {
    path: 'new-game',
    component: NewGameComponent,
    data: {}
  },
  {
    path: '',
    redirectTo: '/new-game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
