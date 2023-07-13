import { ChatStore } from '@/components/Chat/store/chat'
import { Author, MessageType } from '@/components/Chat/types'

export class Chat {}

export class Messages {
  public static isLastFromGuess = (messages: ChatStore['messages']) => {
    const lastMessage = messages.slice(-1)[0]

    if (!lastMessage) {
      return false
    }

    return lastMessage.author === Author.Guess
  }

  public static validate = (newMessageValue: MessageType['text']) => {
    return true
  }
}
