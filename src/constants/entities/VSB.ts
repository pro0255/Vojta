import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class VSB extends Entity {
  abbreviatedName: string = 'VSB'
  iconLink: string = 'masterDegree.png'
  webLink: string = testWebLink
  wholeName: string = 'VSB - Technical University of Ostrava - VSB-TUO'
  altText: string = this.wholeName
}
