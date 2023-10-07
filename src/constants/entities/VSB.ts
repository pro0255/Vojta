import { Entity } from '@/constants/entities/Entity'

export class VSB extends Entity {
  abbreviatedName: string = 'VSB'
  iconLink: string = 'masterDegree.png'
  webLink: string = 'https://www.vsb.cz/en'
  wholeName: string = 'VSB - Technical University of Ostrava - VSB-TUO'
  altText: string = this.wholeName
}
