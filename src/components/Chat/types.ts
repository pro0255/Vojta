export enum Author {
  Vojta = 'Vojta',
  Guess = 'Guess',
}

export type MessageType = {
  timestamp: number | Date
  author: Author
  text: string
}
