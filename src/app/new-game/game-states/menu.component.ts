import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';


@Component({template:``})

export class Menu extends Phaser.State {

  game: Phaser.Game

  constructor() {
    super()
  }

  backgroundMusic;
  enterKey;
  timer = 0;
  text;
  text2;
  text3;

  create() {
    this.backgroundMusic = this.game.add.audio('menu');
    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();

    this.game.select = this.game.add.audio("pressEnter");

    var style = {
      font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var style2 = {
      font: "28px Press Start 2P", fill: "#99ccff", boundsAlignH: "center", boundsAlignV: "middle" };

    this.game.text = this.game.add.text(0, 0, "The Last Flame Templar\n\n         II", style);
    this.game.text.setTextBounds(0, 100, 725, 100);

    this.game.text2 = this.game.add.text(200, 480, "PRESS ENTER", style);

    this.game.text3 = this.game.add.text(180, 350, '-Demo Build-', style2);

    this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  }

  update() {
    this.timer += this.game.time.elapsed;
    if (this.timer >= 500) {
      this.timer -= 500;
      this.game.text2.visible = !this.game.text2.visible;
    }

    if (this.enterKey.isDown) {
        this.game.select.play();
        this.backgroundMusic.loop = false;
        this.backgroundMusic.stop();
        this.game.state.start('Directions');

    }
  }

}
