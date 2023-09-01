import Phaser from 'phaser'
import Preloader from './Preloader.scene.ts'
import Game from './scenes/Game.scene.ts'

const config = {
  title: 'game_name',
  version: '0.0.1',
  type: Phaser.CANVAS,
  scale: {
    parent: 'phaser_container',
    width: 800,
    height: 600,
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: '#f0f0f0',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [Preloader, Game],
}

const body = <HTMLBodyElement>document.querySelector('body')
body.style.backgroundColor = '#202020'

export default new Phaser.Game(config)
