import { testWebLink } from '@/constants/mocks'
import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class NextJS extends NotSpecificEntity {
  abbreviatedName: string = 'NEXT'
  iconLink: string = 'nextjs.svg'
  webLink: string = testWebLink
  wholeName: string = 'Next.js'
  altText: string = this.wholeName
}