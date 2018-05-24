import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGameRoutingModule } from './new-game-routing.module';

import { NewGameComponent } from './new-game.component';

@NgModule({
  imports:[ CommonModule, NewGameRoutingModule],
  exports:[],
  declarations:[ NewGameComponent ],
  providers: []
})

export class NewGameModule{}
