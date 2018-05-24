import { Component } from '@angular/core';

import * as Phaser from '../../../node_modules/phaser-ce/build/phaser.js';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})

export class NewGameComponent {
  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {preload : this.preload, create: this.create})
  }

  game: Phaser.Game;

  preload() {
    this.game.load.image('logo', '../../assets/images/items/blue-gem.png');
  }

  create() {
      var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
  }
}
