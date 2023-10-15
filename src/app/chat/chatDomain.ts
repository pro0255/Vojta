import { Author, MessageType } from '@/app/chat/types'
import { ChatStore } from '@/app/chat/chatStore'

export class Messages {
  public static isLastFromGuess = (messages: ChatStore['messages']) => {
    const lastMessage = messages.slice(-1)[0]

    if (!lastMessage) {
      return false
    }

    return lastMessage.author === Author.Guess
  }

  public static isEmpty = (
    newMessageValue: MessageType['text'] | undefined
  ) => {
    return newMessageValue === '' || !newMessageValue
  }

  public static validate = (
    newMessageValue: MessageType['text'] | undefined
  ) => {
    return true
  }

  public static canSend = (value: string) => {
    return true
  }
}
