import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({template:``})

export class Preloader extends Phaser.State {

  game : Phaser.Game;
  map  : Phaser.Tilemap;

  constructor() {
    super();
  }

  preload() {
    this.game.time.advancedTiming = true;
    this.game.load.image('logo', '../../../assets/images/items/blue-gem.png');
    this.game.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
    this.game.preloadBar.anchor.setTo(0.5, 0.5);
    this.game.time.advancedTiming = true;
    this.game.load.setPreloadSprite(this.game.preloadBar);

    this.game.load.tilemap('myMap', '../../../assets/maps/level1smaller.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('reducedtileset', '../../../assets/images/world/reducedtileset.png');
    this.game.load.image('Level_Bg', '../../../assets/images/world/background.jpg');

    this.game.load.image('portait', '../../../assets/images/player/portait.png');
    this.game.load.spritesheet('player', '../../../assets/images/player/merged-paladin.png', 60, 96);
    this.game.load.spritesheet('fire-right', '../../../assets/images/player/fireball-right.png', 64, 64);
    this.game.load.spritesheet('fire-left', '../../../assets/images/player/fireball-left.png', 64, 64);
    this.game.load.spritesheet('big-fireball-collision', '../../../assets/images/player/big-fireball-collision.png', 48, 48);

    this.game.load.spritesheet('blue-gem', '../../../assets/images/items/blue-gem.png', 39, 39);
    this.game.load.spritesheet('red-gem', '../../../assets/images/items/red-gem.png', 39, 39);
    this.game.load.spritesheet('gold-key', '../../../assets/images/items/key-item.png', 46, 64);
    this.game.load.spritesheet('magic-beaker', '../../../assets/images/items/magic-beaker-item.png', 23, 31);
    this.game.load.spritesheet('blue-candle', '../../../assets/images/world/blue-candle.png', 64, 64);
    this.game.load.spritesheet('bat', '../../../assets/images/enemies/bat-enemy.png', 64, 64);
    this.game.load.spritesheet('spikes', '../../../assets/images/world/spikes.png', 64, 64);
    this.game.load.spritesheet('door', '../../../assets/images/world/key-hole-door.png', 64, 128);
    this.game.load.spritesheet('angry-plant', '../../../assets/images/enemies/angry-plant.png', 64, 64);

    this.game.load.audio("menu", "../../../assets/bg-music/Puzzle-Game-2.mp3");
    this.game.load.audio("level1", "../../../assets/bg-music/Castle-of-Despair.mp3");
    this.game.load.audio("gameover", "../../../assets/bg-music/Unpleasant-Discovery.mp3");

    this.game.load.audio("pressEnter", "../../../assets/sound-effects/menu-select.mp3");
    this.game.load.audio("fireball-sound", "../../../assets/sound-effects/fireball.mp3");
    this.game.load.audio("jump-sound", "../../../assets/sound-effects/jump-sound.mp3");
    this.game.load.audio("pickup-item", "../../../assets/sound-effects/pickup-item.mp3");
    this.game.load.audio("enemy-ignite", "../../../assets/sound-effects/enemy-ignite.mp3");
    this.game.load.audio("death-scream", "../../../assets/sound-effects/death-scream.mp3");
  }

  create() {
    this.game.state.start('Menu')
  }

}
