export enum Author {
  Vojta = 'Vojta',
  Guess = 'Guess',
}

export type MessageType = {
  timestamp: number
  author: Author
  text: string
}
