// main menu of game
class mainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'mainMenuScene'
    })
  }

  logo;

  preload = function() {
    this.load.image('logo', 'Assets/UI/Logo/logo.png');
    this.load.audio('music', 'Assets/Audio/music/Juhani Junkala [Chiptune Adventures] 4. Stage Select.wav');
  }

  create = function() {
    //click for fullscreen
    this.input.on('pointerdown', () => {
      this.game.scale.startFullscreen();
    });

    // zKey to interact and continue/start game
    zKey = this.input.keyboard.addKey('z');

    // logo
    this.logo = this.add.image(256, 96, 'logo');

    // zKey
    this.continueText = this.add.text(200, 144, 'Press [z] to Start', {
      fontSize: '16px',
      fontFamily: 'c64esque',
      color: '#FFF',
      lineSpacing: 6
    });

    music = this.sound.add('music');
    music.play({
      volume: 0,
      loop: true
    });

    this.tweens.add({
      targets: music,
      volume: musicVolume,
      duration: 5000
    });

  }

  update = function() {
    if (zKey.isDown) {
      music.stop();
      this.scene.start('fall');

      //previousMusic = music;
      //canTransition = false;
      //this.continueText.setVisible(false);
      //this.tweens.add({
      //  targets: previousMusic,
      //  volume: 0,
      //  duration: 2000,
      //  onComplete: previousMusic.stop()
      //});

      //this.scene.transition({
      //  target: 'fall',
      //  duration: 3000,
      //  moveBelow: true,
      //  allowInput: false,
      //  onUpdate: function(progress) {
      //   this.logo.alpha = 1 - progress;
      // },
      //  onComplete: canTransition = true
      //});
    }

  }
}
