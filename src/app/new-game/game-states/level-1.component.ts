import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({template:``})

export class Level1 extends Phaser.State {

  game : Phaser.Game;

  constructor() {
    super();
  }


  AngryPlant = function(index, game, x, y){
    this.angryPlant = game.add.sprite(x, y, 'angry-plant');
    this.angryPlant.anchor.setTo(0.5, 0.5);
    this.angryPlant.name = index.toString();
    game.physics.enable(this.angryPlant, Phaser.Physics.ARCADE);
    this.angryPlant.body.immovable = true;
    this.angryPlant.body.collideWorldBounds = true;
    this.angryPlant.allowGravity = false;
    this.angryPlantTween = game.add.tween(this.angryPlant).to({
        x: this.angryPlant.x + 10,
    }, 0, 'Linear', true, 0, -1, true);
    this.angryPlant.body.setSize(this.angryPlant.width * 1, this.angryPlant.height * 1);
    this.angryPlant.animations.add('writhe', [0, 1, 2, 3], 7, true);
    this.angryPlant.animations.play('writhe', 7, true);

  }

  Enemybat = function(index, game, x, y) {
    this.bat = game.add.sprite(x, y, 'bat');
    this.bat.anchor.setTo(0.5, 0.5);
    this.bat.name = index.toString();
    game.physics.enable(this.bat, Phaser.Physics.ARCADE);
    this.bat.body.immovable = true;
    this.bat.body.collideWorldBounds = true;
    this.bat.body.allowGravity = false;
    this.batTween = game.add.tween(this.bat).to({
        y: this.bat.y + 100
    }, 1000, 'Linear', true, 0, -1, true);
    this.bat.body.setSize(this.bat.width * 1 / 4, this.bat.height * 1 / 2)
    this.bat.animations.add('fly', [0, 1, 2, 3, 4, 5], 7, true);
    this.bat.animations.play('fly', 7, true);
  }

  BlueGemItem = function (index, game, x, y) {
    this.blueGem = game.add.sprite(x, y, 'blue-gem');
    this.blueGem.name = index.toString();
    game.physics.enable(this.blueGem, Phaser.Physics.ARCADE);
    this.blueGem.body.immovable = false;
    this.blueGem.body.collideWorldBounds = true;
    this.blueGem.body.allowGravity = false;
    this.blueGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
    this.blueGem.animations.play('shimmer', 5, true);
  }

  RedGemItem = function (index, game, x, y) {
    this.redGem = game.add.sprite(x, y, 'red-gem');
    this.redGem.name = index.toString();
    game.physics.enable(this.redGem, Phaser.Physics.ARCADE);
    this.redGem.body.immovable = false;
    this.redGem.body.collideWorldBounds = true;
    this.redGem.body.allowGravity = false;
    this.redGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
    this.redGem.animations.play('shimmer', 5, true);
  }

  GoldKeyItem = function (index, game, x, y) {
    this.goldKey = game.add.sprite(x, y, 'gold-key');
    this.goldKey.name = index.toString();
    game.physics.enable(this.goldKey, Phaser.Physics.ARCADE);
    this.goldKey.body.immovable = false;
    this.goldKey.body.collideWorldBounds = true;
    this.goldKey.body.allowGravity = false;
    this.goldKey.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
    this.goldKey.animations.play('shimmer', 5, true);
  }

  MagicBeakerItem = function (index, game, x, y) {
    this.magicBeaker = game.add.sprite(x, y, 'magic-beaker');
    this.magicBeaker.name = index.toString();
    game.physics.enable(this.magicBeaker, Phaser.Physics.ARCADE);
    this.magicBeaker.body.immovable = false;
    this.magicBeaker.body.collideWorldBounds = true;
    this.magicBeaker.body.allowGravity = false;
    this.magicBeaker.animations.add('shimmer', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true);
    this.magicBeaker.animations.play('shimmer', 5, true);
  }

  DeathSpikes = function (index, game, x, y){
    this.deathSpikes = game.add.sprite(x, y, 'spikes');
    this.deathSpikes.name = index.toString();
    game.physics.enable(this.deathSpikes, Phaser.Physics.ARCADE);
    this.deathSpikes.body.immovable = false;
    this.deathSpikes.body.collideWorldBounds = true;
    this.deathSpikes.body.allowGravity = false;


  }

  //BATS
  enemy0;
  enemy1;
  enemy2;
  enemy3;
  enemy4;
  enemy5;
  enemy6;
  enemy12;
  enemy13;
  enemy14;

  //ANGRY PLANTS

  enemy7;
  enemy8;
  enemy9;
  enemy10;
  enemy11;

  controls = {};
  door;
  fireballCollisions;
  facing = 'right';
  fireballs;
  health = 10;
  jumpTimer = 0;
  key = 0;
  mana = 10;
  map;
  player;
  playerSpeed = 400;
  respawn;
  score = 0;
  shootTime = 0;
  spikes;
  text0;
  text1;
  text2;
  text3;

  create() {
    this.game.camera.flash('#000000');

    var background = this.game.add.image(0, 0, "Level_Bg");
    background.width = this.game.width;
    background.height = this.game.height;
    background.fixedToCamera = true;

    this.game.shoot = this.game.add.audio("fireball-sound");
    this.game.jumpSound = this.game.add.audio("jump-sound");
    this.game.select = this.game.add.audio("menu-select");
    this.game.pickupItem = this.game.add.audio("pickup-item")
    this.game.enemyIgnite = this.game.add.audio("enemy-ignite");
    this.game.deathScream = this.game.add.audio("death-scream");

    this.game.physics.arcade.gravity.y = 1400;

    var backgroundMusic = this.game.add.audio('level1');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    var respawn = this.game.add.group();

    var map = this.game.add.tilemap('myMap');
        map.addTilesetImage('reducedtileset', 'tileset');


    var backgroundLayer = map.createLayer("Background");
    var blockedLayer = map.createLayer("Collision");
    var objectLayer = map.createLayer("Object Layer 1")
    backgroundLayer.resizeWorld();

    map.setCollisionBetween(1, 2000, true, 'Collision');

    map.createFromObjects('Object Layer 1', 1, '', 0, true, false, respawn); //spawn point

    this.player = this.game.add.sprite(0, 0, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.game.spawn(); // spawn function is invoked on player object here

    this.player.animations.add('idle', [8, 9], 2, true);
    this.player.animations.add('jump', [15], 1, true);
    this.player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    this.player.animations.add('shoot-fireball-right', [10, 11, 12, 13, 14], 20, false);
    this.player.animations.add('shoot-fireball-left', [10, 11, 12, 13, 14], 20, false);
    this.player.animations.add('damage',[16, 17, 18, 19, 20, 21], 10, false);
    this.game.camera.follow(this.player);
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(this.player.width * 2 / 3, this.player.height * 95 / 100);

    this.controls = {
      right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    }

// blue0 = new BlueGemItem(0, game, player.x + 100, player.y - 30);
// blue1 = new BlueGemItem(0, game, player.x + 215, player.y - 50);
// blue2 = new BlueGemItem(0, game, player.x + 725, player.y - 50);
// blue3 = new BlueGemItem(0, game, player.x + 425, player.y + 400);
// blue4 = new BlueGemItem(0, game, player.x + 1550, player.y + -70);
// blue5 = new BlueGemItem(0, game, player.x + 2950, player.y + 275);
// blue6 = new BlueGemItem(0, game, player.x + 2165, player.y + 175);
// blue7 = new BlueGemItem(0, game, player.x + 1350, player.y + 300);
//
// red0 = new RedGemItem(0, game, player.x + 0, player.y + 800);
// red1 = new RedGemItem(0, game, player.x + 2492, player.y + -330);
// red2 = new RedGemItem(0, game, player.x + 2525, player.y + 175);
//
// key0 = new GoldKeyItem(0, game, player.x + 0, player.y + 400);
// key1 = new GoldKeyItem(0, game, player.x + 2950, player.y + 650);
//
// magic0 = new MagicBeakerItem(0, game, player.x + 3046, player.y + -94);
// // magic1 = new MagicBeakerItem(0, game, player.x + , player.y+ );
//
// this.enemy0 = new Enemybat(0, game, player.x + 260, player.y - 75);
// this.enemy1 = new Enemybat(0, game, player.x + 475, player.y - 75);
// this.enemy2 = new Enemybat(0, game, player.x + 725, player.y - 75);
// this.enemy3 = new Enemybat(0, game, player.x + 475, player.y + 200);
// this.enemy4 = new Enemybat(0, game, player.x + 2500, player.y - 100);
// this.enemy5 = new Enemybat(0, game, player.x + 2700, player.y - 125);
// this.enemy6 = new Enemybat(0, game, player.x + 2900, player.y - 100);
// this.enemy13 = new Enemybat(0, game, player.x + 2300, player.y - 125);
// this.enemy14 = new Enemybat(0, game, player.x + 2100, player.y - 100);
//
// this.enemy7  = new AngryPlant(0, game, player.x + 15, player.y + 415);
// this.enemy8  = new AngryPlant(0, game, player.x + 500, player.y + 800);
// this.enemy9  = new AngryPlant(0, game, player.x + 300, player.y + 800);
// this.enemy10 = new AngryPlant(0, game, player.x + 100, player.y + 800);
// this.enemy11 = new AngryPlant(0, game, player.x + 2545, player.y + 280);
// this.enemy12 = new AngryPlant(0, game, player.x + 2700, player.y -350);
  }

  spawn() {
    this.respawn.forEach(function(spawnPoint) {
      this.player.reset(spawnPoint.x, spawnPoint.y);
    }, this);
  }

  checkOverlap(spriteA, spriteB) {
    if (spriteA.alive == false || spriteB.alive == false) {
      return false
    }
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
  }

}
