import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class Czechitas extends Entity {
  abbreviatedName: string = 'Czechitas'
  iconLink: string = 'czechitas.jpg'
  webLink: string = testWebLink
  wholeName: string = 'Czechitas'
  altText: string = this.wholeName
}
