import { testWebLink } from '@/constants/mocks'
import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class TypeScript extends NotSpecificEntity {
  abbreviatedName: string = 'TS'
  iconLink: string = 'typescript.png'
  webLink: string = testWebLink
  wholeName: string = 'TypeScript'
  altText: string = this.wholeName
}
