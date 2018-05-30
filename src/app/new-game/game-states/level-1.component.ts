import { Component } from '@angular/core';

import * as Phaser from '../../../../node_modules/phaser-ce/build/phaser.js';

@Component({template:``})

export class Level1 extends Phaser.State {

  game   : Phaser.Game;
  map    : Phaser.Tilemap;
  player : Phaser.Sprite;
  bat    : Phaser.Enemybat;

  constructor() {
    super();
  }


  AngryPlant = function(index, game, x, y) {
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
  jumpTimer = 0;
  playerSpeed = 400;
  respawn;
  shootTime = 0;
  spikes;
  redGem;
  blueGem;


  scaleRatio = window.devicePixelRatio / 3;

    create() {

      this.game.health = 10;
      this.game.key = 0;
      this.game.mana = 10;
      this.game.score = 0;

      this.game.camera.flash('#000000');

      this.game.background = this.game.add.image(0, 0, "Level_Bg");
      this.game.background.width = this.game.width;
      this.game.background.height = this.game.height;
      this.game.background.fixedToCamera = true;

      this.game.shoot = this.game.add.audio("fireball-sound");
      this.game.jumpSound = this.game.add.audio("jump-sound");
      this.game.select = this.game.add.audio("menu-select");
      this.game.pickupItem = this.game.add.audio("pickup-item")
      this.game.enemyIgnite = this.game.add.audio("enemy-ignite");
      this.game.deathScream = this.game.add.audio("death-scream");

      this.game.physics.arcade.gravity.y = 1400;

      this.game.backgroundMusic = this.game.add.audio('level1');
      this.game.backgroundMusic.loop = true;
      this.game.backgroundMusic.play();

      this.respawn = this.game.add.group();

      this.map = this.game.add.tilemap('myMap');
      this.map.addTilesetImage('tileset','reducedtileset');


      this.game.backgroundLayer = this.map.createLayer("Background");
      this.game.blockedLayer = this.map.createLayer("Collision");
      // this.game.objectLayer = this.map.createLayer("Object Layer 1")
      this.game.backgroundLayer.resizeWorld();

      this.map.setCollisionBetween(1, 2000, true, 'Collision');

      // this.map.createFromObjects('Object Layer 1', 1, '', 0, true, false, this.respawn); //spawn point

      this.game.player = this.game.add.sprite(0, 0, 'player');
      this.game.player.anchor.setTo(0.5, 0.5);

      // spawn function is invoked on player object here

      this.game.player.animations.add('idle', [8, 9], 2, true);
      this.game.player.animations.add('jump', [15], 1, true);
      this.game.player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
      this.game.player.animations.add('shoot-fireball-right', [10, 11, 12, 13, 14], 20, false);
      this.game.player.animations.add('shoot-fireball-left', [10, 11, 12, 13, 14], 20, false);
      this.game.player.animations.add('damage',[16, 17, 18, 19, 20, 21], 10, false);
      this.game.camera.follow(this.game.player);
      this.game.physics.arcade.enable(this.game.player);
      this.game.player.body.collideWorldBounds = true;
      this.game.player.body.setSize(this.game.player.width * 2 / 3, this.game.player.height * 95 / 100);

      this.game.controls = {
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
        shoot: this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
      }

      this.game.blue0 = new this.BlueGemItem(0, this.game, this.game.player.x + 100, this.game.player.y + 300);
      // blue1 = new BlueGemItem(0, game, player.x + 215, player.y - 50);
      // blue2 = new BlueGemItem(0, game, player.x + 725, player.y - 50);
      // blue3 = new BlueGemItem(0, game, player.x + 425, player.y + 400);
      // blue4 = new BlueGemItem(0, game, player.x + 1550, player.y + -70);
      // blue5 = new BlueGemItem(0, game, player.x + 2950, player.y + 275);
      // blue6 = new BlueGemItem(0, game, player.x + 2165, player.y + 175);
      // blue7 = new BlueGemItem(0, game, player.x + 1350, player.y + 300);

      // red0 = new RedGemItem(0, game, player.x + 0, player.y + 800);
      // red1 = new RedGemItem(0, game, player.x + 2492, player.y + -330);
      // red2 = new RedGemItem(0, game, player.x + 2525, player.y + 175);

      // key0 = new GoldKeyItem(0, game, player.x + 0, player.y + 400);
      // key1 = new GoldKeyItem(0, game, player.x + 2950, player.y + 650);

      // magic0 = new MagicBeakerItem(0, game, player.x + 3046, player.y + -94);
      // magic1 = new MagicBeakerItem(0, game, player.x + , player.y+ );

      this.game.enemy0  = new this.Enemybat(0, this.game, this.game.player.x + 260, this.game.player.y + 350);
      this.game.enemy1  = new this.Enemybat(0, this.game, this.game.player.x + 475, this.game.player.y - 75);
      this.game.enemy2  = new this.Enemybat(0, this.game, this.game.player.x + 725, this.game.player.y - 75);
      this.game.enemy3  = new this.Enemybat(0, this.game, this.game.player.x + 475, this.game.player.y + 200);
      this.game.enemy4  = new this.Enemybat(0, this.game, this.game.player.x + 2500, this.game.player.y - 100);
      this.game.enemy5  = new this.Enemybat(0, this.game, this.game.player.x + 2700, this.game.player.y - 125);
      this.game.enemy6  = new this.Enemybat(0, this.game, this.game.player.x + 2900, this.game.player.y - 100);
      this.game.enemy13 = new this.Enemybat(0, this.game, this.game.player.x + 2300, this.game.player.y - 125);
      this.game.enemy14 = new this.Enemybat(0, this.game, this.game.player.x + 2100, this.game.player.y - 100);

      this.game.enemy7  = new this.AngryPlant(0, this.game, this.game.player.x + 15, this.game.player.y + 415);
      this.game.enemy8  = new this.AngryPlant(0, this.game, this.game.player.x + 500, this.game.player.y + 800);
      this.game.enemy9  = new this.AngryPlant(0, this.game, this.game.player.x + 300, this.game.player.y + 800);
      this.game.enemy10 = new this.AngryPlant(0, this.game, this.game.player.x + 100, this.game.player.y + 800);
      this.game.enemy11 = new this.AngryPlant(0, this.game, this.game.player.x + 2545, this.game.player.y + 280);
      this.game.enemy12 = new this.AngryPlant(0, this.game, this.game.player.x + 2700, this.game.player.y -350);

      this.game.door = this.game.add.sprite(this.game.player.x + 1410, this.game.player.y + 610, 'door');
      this.game.physics.arcade.enable(this.game.door);
      this.game.door.body.allowGravity = false;
      this.game.door.body.immovable = true;

      // spikes0 = new DeathSpikes(0, game, player.x + 2408, player.y + 714);
      // spikes1 = new DeathSpikes(0, game, player.x + 2472, player.y + 714);
      // spikes2 = new DeathSpikes(0, game, player.x + 2536, player.y + 714);
      // spikes3 = new DeathSpikes(0, game, player.x + 2600, player.y + 714);
      // spikes4 = new DeathSpikes(0, game, player.x + 770, player.y + 0);
      // spikes5 = new DeathSpikes(0, game, player.x + 834, player.y + 0);
      // spikes6 = new DeathSpikes(0, game, player.x + 898, player.y + 0);
      // spikes7 = new DeathSpikes(0, game, player.x + 962, player.y + 0);
      // spikes8 = new DeathSpikes(0, game, player.x + 1026, player.y + 0);
      // spikes8 = new DeathSpikes(0, game, player.x + 1090, player.y + 0);
      // spikes9 = new DeathSpikes(0, game, player.x + 1154, player.y + 0);

      this.game.fireballsRight = this.game.add.group();
      this.game.fireballsRight.enableBody = true;
      this.game.fireballsRight.physicsBodyType = Phaser.Physics.ARCADE;
      this.game.fireballsRight.createMultiple(20, 'fire-right');
      this.game.fireballsRight.setAll('anchor.x', 0.5);
      this.game.fireballsRight.setAll('anchor.y', 0.5);
      this.game.fireballsRight.setAll('outOfBoundsKill', true);
      this.game.fireballsRight.setAll('checkWorldBounds', true);
      this.game.fireballsRight.setAll('body.allowGravity', false);
      this.game.fireballsRight.setAll('body.setSize', this.game.fireballsRight.width * 1 / 2, this.game.fireballsRight.height * 1 / 2);
      this.game.fireballsRight.callAll('animations.add', 'animations', 'fire-right', [0, 1, 2, 3, 4], 5, true);
      this.game.fireballsRight.callAll('play', null, 'fireball-sound');

      this.game.fireballsLeft = this.game.add.group();
      this.game.fireballsLeft.enableBody = true;
      this.game.fireballsLeft.physicsBodyType = Phaser.Physics.ARCADE;
      this.game.fireballsLeft.createMultiple(20, 'fire-left');
      this.game.fireballsLeft.setAll('anchor.x', 0.5);
      this.game.fireballsLeft.setAll('anchor.y', 0.5);
      this.game.fireballsLeft.setAll('outOfBoundsKill', true);
      this.game.fireballsLeft.setAll('checkWorldBounds', true);
      this.game.fireballsLeft.setAll('body.allowGravity', false);
      this.game.fireballsLeft.callAll('animations.add', 'animations', 'fire-left', [0, 1, 2, 3, 4], 5, true);
      this.game.fireballsLeft.callAll('play', null, 'fireball-sound');

      this.game.fireballCollisions = this.game.add.group();
      this.game.fireballCollisions.createMultiple(30, 'big-fireball-collision');
      this.game.fireballCollisions.forEach(deathAnimation, this);

      function deathAnimation(enemy){
        enemy.anchor.x= 0.5;
        enemy.anchor.y= 0.5;
        enemy.animations.add('big-fireball-collision')
      }

      // Player Interface & Information

      this.game.portait = this.game.add.sprite(5, 5, 'portait');
      this.game.portait.scale.x= 0.5;
      this.game.portait.scale.y= 0.5;
      this.game.portait.fixedToCamera = true;

      this.game.text0 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 5, "Score: " + this.game.score, {
        font: '20px Press Start 2P',
        fill: '#ffffff',
        align: 'center'
      });

      this.game.text1 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 25, "HP:" + this.game.health + " MP:" + this.game.mana, {
        font: '20px Press Start 2P',
        fill: '#ffffff',
        align: 'center'
      });

      this.game.text3 = this.game.add.text(this.game.camera.x + 65, this.game.camera.y + 45, "Keys: " + this.game.key +"/2", {
        font: '20px Press Start 2P',
        fill: '#ffffff',
        align: 'center'
      });

      this.game.text0.fixedToCamera = true;
      this.game.text1.fixedToCamera = true;
      this.game.text2.fixedToCamera = true;
      this.game.text3.fixedToCamera = true;

    }

    update() {

      this.game.player.body.velocity.x = 0;

      this.game.physics.arcade
        .collide(this.game.player, this.game.blockedLayer);

      this.game.physics.arcade
        .collide(
          [
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
          ],
          this.game.blockedLayer);

      this.game.physics.arcade
        .collide(this.game.player, this.game.door, this.game.nextLevel, null, this);

      this.game.physics.arcade
        .collide(this.game.player,
          [
            this.game.blue0.blueGem,
            // blue1.blueGem, blue2.blueGem, blue3.blueGem, blue4.blueGem, blue5.blueGem, blue6.blueGem, blue7.blueGem
          ], this.item100, null, this);
      // this.physics.arcade.collide(player, [red0.redGem, red1.redGem, red2.redGem], this.item500, null, this);
      // this.physics.arcade.collide(player, [key0.goldKey, key1.goldKey], this.itemKey, null, this);
      // this.physics.arcade.collide(player, [magic0.magicBeaker], this.itemMagicBeaker, null, this);

      // this.physics.arcade.collide(player, [spikes0.deathSpikes, spikes1.deathSpikes, spikes2.deathSpikes, spikes3.deathSpikes, spikes4.deathSpikes, spikes5.deathSpikes, spikes6.deathSpikes, spikes7.deathSpikes, spikes8.deathSpikes, spikes9.deathSpikes], this.deathPit, null, this);

      this.game.physics.arcade
        .collide(this.game.player,
          [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant,
            this.game.enemy13.bat,
            this.game.enemy14.bat
          ], this.playerDamage
        );
        
      this.game.physics.arcade
        .overlap(this.game.fireballsRight,
          [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy13.bat,
            this.game.enemy14.bat
          ], this.collisionHandler, null, this);

      this.game.physics.arcade
        .overlap(this.game.fireballsLeft,
          [
            this.game.enemy0.bat,
            this.game.enemy1.bat,
            this.game.enemy2.bat,
            this.game.enemy3.bat,
            this.game.enemy4.bat,
            this.game.enemy5.bat,
            this.game.enemy6.bat,
            this.game.enemy13.bat,
            this.game.enemy14.bat
          ], this.collisionHandler, null, this);

      this.game.physics.arcade
        .overlap(this.game.fireballsLeft,
          [
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
          ], this.collisionHandler1, null, this);

      this.game.physics.arcade
        .overlap(this.game.fireballsRight,
          [
            this.game.enemy7.angryPlant,
            this.game.enemy8.angryPlant,
            this.game.enemy9.angryPlant,
            this.game.enemy10.angryPlant,
            this.game.enemy11.angryPlant,
            this.game.enemy12.angryPlant
          ], this.collisionHandler1, null, this);

      if (this.game.health <= 0){
        this.game.deathScream.play();
        this.game.backgroundMusic.mute = true;
        this.game.state.start('Endgame', true, false);
        this.game.key = 0;
        this.game.health = 10;
      }

      if (this.game.controls.right.isDown) {
        if (this.game.player.body.onFloor() || this.game.player.body.touching.down) {
          this.game.player.animations.play('run');
          }
          this.game.player.scale.setTo(1, 1);
          this.game.player.body.velocity.x += this.playerSpeed;
          this.game.facing = 'right';

      }

      if (this.game.controls.left.isDown) {
        if (this.game.player.body.onFloor() || this.game.player.body.touching.down) {
          this.game.player.animations.play('run');
        }
        this.game.player.scale.setTo(-1, 1);
        this.game.player.body.velocity.x -= this.playerSpeed;
        this.game.facing = 'left';

      }

      if (this.game.controls.up.isDown
        && (this.game.player.body.onFloor() || this.game.player.body.touching.down)
        && this.game.time.now > this.jumpTimer
      ){
        this.game.jumpSound.play()
        this.game.player.body.velocity.y = -625;
        this.game.jumpTimer = this.game.time.now + 675;
        this.game.player.animations.play('jump');
      }

      if (this.game.controls.shoot.isDown
        && this.game.facing == 'right'
        && this.game.mana > 0
      ){
        this.shootFireballRight();
      }

      if(this.game.controls.shoot.isDown
        && this.game.facing == 'left'
        && this.game.mana > 0
      ) {
        this.shootFireballLeft();
      }

      if(this.game.player.body.velocity.x == 0 && this.game.player.body.velocity.y == 0 && !this.game.controls.shoot.isDown) {
        this.game.player.animations.play('idle');
      }


    }

    collisionHandler(fireball, bat) {
      fireball.kill();
      bat.kill();
      this.game.text0.setText("Score: " + (this.game.score += 50));
      this.game.fireballCollision = this.game.fireballCollisions.getFirstExists(false);
      this.game.fireballCollision.reset(bat.body.x + 75, bat.body.y + 30);
      this.game.fireballCollision.play('big-fireball-collision', 10, false, true);
    }

    collisionHandler1(fireball, angryPlant){
      fireball.kill();
      angryPlant.kill();
      this.game.text0.setText("Score: " + (this.game.score += 150));
      this.game.fireballCollision = this.game.fireballCollisions.getFirstExists(false);
      this.game.fireballCollision.reset(angryPlant.body.x - 15, angryPlant.body.y + 30);
      this.game.fireballCollision.play('big-fireball-collision', 10, false, true);
    }

    deathPit(player, deathSpikes) {
      this.game.health = 0;
    }

    item100(player, blueGem) {
      blueGem.kill();
      this.game.pickupItem.play();
      this.game.text0.setText("Score: " + (this.game.score += 100));
    }

    item500(player, redGem) {
      redGem.kill();
      this.game.pickupItem.play();
      this.game.text0.setText("Score: " + (this.game.score += 500));
    }

    itemKey(player, goldKey) {
      goldKey.kill();
      this.game.pickupItem.play();
      this.game.text3.setText("Keys: " + (this.game.key += 1) +"/2");
    }

    itemMagicBeaker(player, magicBeaker) {
      magicBeaker.kill();
      this.game.pickupItem.play();
      this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana += 10));
    }


    nextLevel() {
      if (this.game.key >= 2) {
      this.game.backgroundMusic.mute = true;
      this.game.key = 0;
      this.game.state.start('Endgame', true, false);
      }
    }

    playerDamage(player, data) {
      player.animations.play('damage');
      player.body.velocity.y = -550;
      data.game.health = data.game.health - 1;
      data.game.text1.setText("HP:" + (data.game.health -= 1) + " MP:" + data.game.mana);

    }

    shootFireballLeft() {
      if (this.game.time.now > this.shootTime) {
        this.shootTime = this.game.time.now + 800;
        this.game.fireball = this.game.fireballsLeft.getFirstExists(false);
        if (this.game.fireball) {
            this.game.shoot.play();
            this.game.fireball.reset(this.game.player.x, this.game.player.y);
            this.game.player.animations.play('shoot-fireball-left');
            this.game.fireball.body.velocity.x = -800;
            this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana -= 1));

        }
      }
    }

    shootFireballRight() {
      if (this.game.time.now > this.shootTime) {
        this.shootTime = this.game.time.now + 800;
        this.game.fireball = this.game.fireballsRight.getFirstExists(false);
        if (this.game.fireball) {
            this.game.shoot.play();
            this.game.fireball.reset(this.game.player.x, this.game.player.y);
            this.game.player.animations.play('shoot-fireball-right');
            this.game.fireball.body.velocity.x = 800;
            this.game.text1.setText("HP:" + this.game.health + " MP:" + (this.game.mana -= 1));

        }
      }
    }

    spawn() {
        this.game.respawn.forEach(function(spawnPoint) {
          this.game.player.reset(spawnPoint.x, spawnPoint.y);
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
