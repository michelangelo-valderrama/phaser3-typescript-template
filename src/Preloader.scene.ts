import Phaser from 'phaser'
import TextureKeys from './enums/TextureKeys.enum'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.setPath('./assets')
    this.load.on('complete', () => {
      this.scene.start('game')
    })

    this.load.image(TextureKeys.Logo, 'phaser3-logo.png')
  }
}
