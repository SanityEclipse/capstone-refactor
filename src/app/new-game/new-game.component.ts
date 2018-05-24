import { Component } from '@angular/core';

import * as Phaser from '../../../node_modules/phaser-ce/build/phaser.js';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})

export class NewGameComponent {

    game   : Phaser.Game;
    map    : Phaser.Tilemap;
    layer  : Phaser.TileMapLayer;
    player : Phaser.Sprite;
    
  constructor() {
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
        preload : this.preload,
        create  : this.create,
        update  : this.update,
        render  : this.render
      }
    )
  }



  preload() {
    this.game.load.image('logo', '../../assets/images/items/blue-gem.png');
  }

  create() {
      var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
  }

  update() {

  }

  render() {

  }
}
