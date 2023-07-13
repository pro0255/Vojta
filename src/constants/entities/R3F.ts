import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class R3F extends Entity {
  abbreviatedName: string = 'R3F'
  iconLink: string = 'react-three-fiber.ico'
  webLink: string = testWebLink
  wholeName: string = 'React Three Fiber'
  altText: string = this.wholeName

  override getImage = () => {
    return `/assets/icons/${this.iconLink}`
  }
}
