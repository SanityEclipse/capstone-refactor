
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGameComponent } from './new-game.component';

const routes:Routes = [
  { path: 'new-game', component: NewGameComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGameRoutingModule {}
