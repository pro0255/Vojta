export enum MessageType {
  ai = 'ai',
  client = 'client',
}

export type HistoryMessage = {
  type: MessageType
  content: string
}
