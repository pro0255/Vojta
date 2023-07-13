import { MessageType } from '@/components/Chat/types'

export interface GeneralAgent {
  createMessage(agentText: MessageType['text']): MessageType
}

export interface Agent {
  ask(questText: MessageType['text']): void
}
