import { resetConversation } from '@/fetcher/endpoints/resetConversation'
import { setConversation } from '@/fetcher/endpoints/setConversation'
import { ask } from '@/fetcher/endpoints/ask'

export enum Endpoints {
  Ask = 'ASK',
  ResetConversation = 'RESET_CONVERSATION',
  SetConversation = 'SET_CONVERSATION',
}

export const endpoints = {
  [Endpoints.Ask]: ask,
  [Endpoints.ResetConversation]: resetConversation,
  [Endpoints.SetConversation]: setConversation,
}
