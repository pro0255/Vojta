import { Entity } from '@/constants/entities/Entity'

export class Atlas extends Entity {
  abbreviatedName: string = 'Atlas'
  iconLink: string = 'atlas.jpeg'
  webLink: string = 'https://atlasgroup.cz/'
  wholeName: string = 'ATLAS GROUP'
  altText: string = this.wholeName
}
