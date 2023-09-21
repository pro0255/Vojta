export enum MessageType {
  ai = 'AI',
  client = 'CLIENT',
}

export type HistoryMessage = {
  type: MessageType
  content: string
}
