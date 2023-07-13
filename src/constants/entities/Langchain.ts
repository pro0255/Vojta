import { testWebLink } from '@/constants/mocks'
import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class Langchain extends NotSpecificEntity {
  abbreviatedName: string = 'LangChain'
  iconLink: string = 'langchain.ico'
  webLink: string = testWebLink
  wholeName: string = 'LangChain'
  altText: string = this.wholeName
}
