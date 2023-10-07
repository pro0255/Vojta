import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class TypeScript extends NotSpecificEntity {
  abbreviatedName: string = 'TS'
  iconLink: string = 'typescript.png'
  webLink: string = 'https://www.typescriptlang.org/'
  wholeName: string = 'TypeScript'
  altText: string = this.wholeName
}
