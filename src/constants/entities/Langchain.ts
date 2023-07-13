import { testWebLink } from '@/constants/mocks'
import { Entity } from '@/constants/entities/Entity'

export class Langchain extends Entity {
  abbreviatedName: string = 'LangChain'
  iconLink: string = 'langchain.ico'
  webLink: string = testWebLink
  wholeName: string = 'LangChain'
  altText: string = this.wholeName

  override getImage = () => {
    return `/assets/icons/${this.iconLink}`
  }
}
