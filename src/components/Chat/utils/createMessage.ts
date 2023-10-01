import { Author, MessageType } from '@/components/Chat/types'

const createMessage = (message: string, author: Author): MessageType => {
  return {
    text: message,
    author: author,
    timestamp: new Date(),
    isRendered: false,
  }
}

export const createVojtaMessage = (message: string) => {
  return createMessage(message, Author.Vojta)
}

export const createGuessMessage = (message: string) => {
  return createMessage(message, Author.Guess)
}
