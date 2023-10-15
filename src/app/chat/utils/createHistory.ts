import { HistoryMessage, MessageType } from '@/fetcher/types'

import { Author } from '@/app/chat/types'
import { ChatStore } from '@/app/chat/chatStore'

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
