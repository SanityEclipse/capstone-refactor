import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({template:``})

export class Boot extends Phaser.State {

  game : Phaser.Game;

  constructor() {
    super();
  }

  init() {
    this.game.input.maxpointers = 1;
    this.game.stage.disableVisibityChange = true;
  }

  preload() {
    this.game.load.image('preloaderBar', '../../../assets/images/world/load-bar.png')
  }

  create() {
    this.game.state.start('Preloader')
  }

}
