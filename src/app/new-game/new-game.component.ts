import { Component } from '@angular/core';

import * as Phaser from '../../../node_modules/phaser-ce/build/phaser.js';

import { Boot }      from './game-states/boot.component';
import { Preloader } from './game-states/preloader.component';
import { Menu }      from './game-states/menu.component';
import { Level1 }    from './game-states/level-1.component';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})

export class NewGameComponent{

    game : Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content')
    this.game.state.add('Boot', Boot, false);
    this.game.state.add('Preloader', Preloader, false);
    this.game.state.add('Menu', Menu, false);
    this.game.state.add('Level1', Level1, false);
    this.game.state.start('Boot', true, true);
  }

}
