import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class NextJS extends NotSpecificEntity {
  abbreviatedName: string = 'NEXT'
  iconLink: string = 'nextjs.svg'
  webLink: string = 'https://nextjs.org/'
  wholeName: string = 'Next.js'
  altText: string = this.wholeName
}
