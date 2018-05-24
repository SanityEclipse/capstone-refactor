import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGameRoutingModule } from './new-game-routing.module';

import { NewGameComponent } from './new-game.component';
import { Boot } from './game-states/boot.component';
import { Preloader } from './game-states/preloader.component';
import { Menu } from './game-states/menu.component';
import { Level1 } from './game-states/level-1.component';

@NgModule({
  imports:[ CommonModule, NewGameRoutingModule],
  exports:[],
  declarations:[ NewGameComponent, Boot, Preloader, Menu, Level1 ],
  providers: []
})

export class NewGameModule{}
