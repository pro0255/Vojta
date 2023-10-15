import { Entity } from '@/constants/entities/Entity'

export abstract class NotSpecificEntity extends Entity {
  override getImage = () => {
    return `./assets/icons/${this.iconLink}`
  }

  override getInteractiveLabel = () => {
    return this.wholeName
  }
}
