import { HistoryMessage, MessageType } from '@/fetcher/types'
import { ChatStore } from '@/components/Chat/store/chat'
import { Author } from '@/components/Chat/types'

export const createHistory = (
  messages: ChatStore['messages']
): Array<HistoryMessage> => {
  return messages.map(message => {
    return {
      content: message.text,
      type:
        message.author === Author.Vojta ? MessageType.client : MessageType.ai,
    }
  })
}
