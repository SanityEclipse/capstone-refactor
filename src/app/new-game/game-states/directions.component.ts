import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({ template: `` })

export class Directions extends Phaser.State {

  game : Phaser.Game

  backgroundMusic;
  enterKey;
  text4;
  text5;
  text6;

  constructor() {
    super()
  }

  create() {
    this.game.backgroundMusic = this.game.add.audio('menu');
    this.game.backgroundMusic.loop = true;
    this.game.backgroundMusic.play();

    this.game.select = this.game.add.audio("pressEnter");

    this.game.style = {
      font: "28px Press Start 2P",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    this.game.style2 = {
      font: "28px Press Start 2P",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    this.text4 = this.game.add.text(210, 90, "HOW TO PLAY", this.game.style2);

    this.text5 = this.game.add.text(85, 190, '   A, W, D, = Move\nSpace bar = Fireball\n\n  Collect keys to \n  escape the castle.', this.game.style2);

    this.text6 = this.game.add.text(85, 470, "PRESS ENTER TO BEGIN", this.game.style2);

    this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  }

  update() {
    if (this.enterKey.isDown) {
      this.game.select.play();
      this.game.backgroundMusic.loop = false;
      this.game.backgroundMusic.stop();
      this.game.state.start('Level1');
    }
  }

}
