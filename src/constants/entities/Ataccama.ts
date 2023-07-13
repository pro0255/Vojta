import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class Ataccama extends Entity {
  abbreviatedName: string = 'Ataccama'
  iconLink: string = 'ataccama.jpeg'
  webLink: string = testWebLink
  wholeName: string = 'Ataccama Software, s.r.o.'
  altText: string = this.wholeName
}
