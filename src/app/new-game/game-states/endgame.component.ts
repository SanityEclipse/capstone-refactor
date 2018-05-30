import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({
  template:''
})

export class Endgame extends Phaser.State {

  game : Phaser.Game;

  constructor() {
    super()
  }

  backgroundMusic;
  score;
  name="";
  playerInfo;

  create() {
    this.game.backgroundMusic = this.game.add.audio('gameover');
    this.game.backgroundMusic.loop = true;
    this.game.backgroundMusic.play();

    this.game.select = this.game.add.audio("pressEnter");

    this.game.style = {
      font: "28px Press Start 2P",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    this.game.text7 = this.game.add.text(220, 100, "GAME OVER \n\n" + this.name, this.game.style);
    this.game.text8 = this.game.add.text(100, 300, "Your final Score is \n       " + this.game.score, this.game.style);
    this.game.text9 = this.game.add.text(210, 475, "PRESS ENTER", this.game.style);

    function keyPress(event) {

      this.game.text7.destroy();

      if (event.keyCode === 8 ){
        //BACKSPACE KEY
        this.name= this.name.slice(0, this.name.length-1);
      }

      else if(event.keyCode === 16){
        //SHIFT KEYS
      }

      else if (event.keyCode === 13) {
        // ENTER KEY

        this.game.input.keyboard.onDownCallback = null;
        this.game.select.play();
        this.game.backgroundMusic.loop = false;
        this.game.backgroundMusic.stop();
        this.nextLevel;
      }

      else {
        this.name += event.key;
      }

      this.game.text7 = this.game.add.text(220, 100, "GAME OVER \n\n  " + this.name, this.game.style);
      }

      this.game.input.keyboard.addCallbacks(this, keyPress);

}



  update() {
    this.game.playerInfo = {
      name: this.game.name,
      score: this.game.score
    }
  }

  nextlevel() {
    // ScoreService.createScores(name, score);
    this.game.name = "";
    this.game.score = 0;
    this.game.mana = 10;
    this.game.state.start('Boot', true, true);
  }

}
