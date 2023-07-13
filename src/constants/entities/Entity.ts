import { IEntity } from '@/constants/entities/IEntity'

export abstract class Entity implements IEntity {
  abstract abbreviatedName: string
  abstract altText: string
  abstract iconLink: string
  abstract webLink: string
  abstract wholeName: string

  getImage = () => {
    return `/work/${this.iconLink}`
  }
}
