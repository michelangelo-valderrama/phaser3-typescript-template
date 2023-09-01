import Phaser from 'phaser'
import TextureKeys from '../enums/TextureKeys.enum'

export default class Game extends Phaser.Scene {
  logo!: Phaser.Physics.Arcade.Image

  constructor() {
    super('game')
  }

  create() {
    this.logo = this.physics.add.image(40, 40, TextureKeys.Logo)
    this.logo.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true)
  }
}
