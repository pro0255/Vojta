import { Author, MessageType } from '@/components/Chat/types'
import { faker } from '@faker-js/faker'

const createMockMessage = (number: number): MessageType => {
  return {
    author: number % 2 == 0 ? Author.Guess : Author.Vojta,
    text: faker.string.alpha(),
    timestamp: new Date().getMilliseconds(),
  }
}

export const createMockedMessages = (n: number) => {
  return Array(n)
    .fill(null)
    .map((v, i) => {
      return createMockMessage(i)
    })
}
