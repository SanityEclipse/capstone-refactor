import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';

import * as Phaser from '../../../node_modules/phaser-ce/build/phaser.js';

import { Boot }       from './game-states/boot.component';
import { Preloader }  from './game-states/preloader.component';
import { Menu }       from './game-states/menu.component';
import { Directions } from './game-states/directions.component';
import { Level1 }     from './game-states/level-1.component';
import { Endgame }    from './game-states/endgame.component';
import { ScoreService } from './score.service';

import { Score } from './Score';

@Component({
  selector: 'app-new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.css']
})

export class NewGameComponent implements OnInit {

    game : Phaser.Game;
    scores: Score[] = [];

  constructor(
    private scoreService : ScoreService,
    private ngZone : NgZone
  ){
    this.game = new Phaser.Game(725, 525, Phaser.AUTO, 'content')
    this.game.state.add('Boot', Boot, false);
    this.game.state.add('Preloader', Preloader, false);
    this.game.state.add('Menu', Menu, false);
    this.game.state.add('Directions', Directions, false);
    this.game.state.add('Level1', Level1, false);
    this.game.state.add('Endgame', Endgame, false);
    this.game.state.start('Boot', true, true);
  }

  ngOnInit() {
    this.getScores();
    window.my = window.my || {};
    window.my.namespace = window.my.namespace || {};
    window.my.namespace.addScore = this.addScore.bind(this);
  }

  getScores(): void {
    this.scoreService.getScores()
     .subscribe(scores => this.scores = scores.slice(0,5));
  }

  addScore(id, name, game): void{
    this.ngZone.run(() => this.privateFunc(id, name, game));
  }

  privateFunc(id:number, name:string, score:number): void {
    console.log("adding scores!!!")
    this.scoreService.createScores({id, name, score} as Score)
      .subscribe(score => {
        this.scores.push(score);
    });
  }

  ngOnDestroy() {
    this.game.destroy();
  }

}
