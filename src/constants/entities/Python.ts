import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class Python extends NotSpecificEntity {
  abbreviatedName: string = 'PY'
  iconLink: string = 'python.ico'
  webLink: string = 'https://www.python.org/'
  wholeName: string = 'Python'
  altText: string = this.wholeName
}
