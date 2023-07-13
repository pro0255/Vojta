import { Author, MessageType } from '@/components/Chat/types'
import { GeneralAgent } from '@/components/Chat/domain/agent/types'
import { date } from '@/helpers/date'

const MOCK_MESSAGE = 'LOL'

export class GeneralAgentImpl implements GeneralAgent {
  public createMessage = (message: MessageType['text']): MessageType => {
    return {
      text: message,
      author: Author.Vojta,
      timestamp: date.now(),
    }
  }
}
