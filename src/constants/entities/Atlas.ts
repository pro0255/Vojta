import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class Atlas extends Entity {
  abbreviatedName: string = 'Atlas'
  iconLink: string = 'atlas.jpeg'
  webLink: string = testWebLink
  wholeName: string = 'ATLAS GROUP'
  altText: string = this.wholeName
}
