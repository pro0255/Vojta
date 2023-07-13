import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class NextJS extends Entity {
  abbreviatedName: string = 'NEXT'
  iconLink: string = 'nextjs.svg'
  webLink: string = testWebLink
  wholeName: string = 'Next.js'
  altText: string = this.wholeName

  override getImage = () => {
    return `/assets/icons/${this.iconLink}`
  }
}
