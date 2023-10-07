import { NotSpecificEntity } from '@/constants/entities/NotSpecificEntity'

export class Langchain extends NotSpecificEntity {
  abbreviatedName: string = 'LangChain'
  iconLink: string = 'langchain.ico'
  webLink: string = 'https://python.langchain.com/docs/get_started/introduction'
  wholeName: string = 'LangChain'
  altText: string = this.wholeName
}
