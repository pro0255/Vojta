import { create, StoreApi, UseBoundStore } from 'zustand'
import { MessageType } from '@/components/Chat/types'
import { persist } from 'zustand/middleware'
import { endpoints, Endpoints } from '@/fetcher/endpoints'
import { createVojtaMessage } from '@/components/Chat/utils/createMessage'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'

export type ChatStore = {
  messages: Array<MessageType>
  add: (message: MessageType) => void
  reset: () => void
  renderedMessagesCount: number
  countAdd: () => void
}

export const useChatStore: UseBoundStore<StoreApi<ChatStore>> = create(
  persist(
    set => {
      const value: ChatStore = {
        renderedMessagesCount: 0,
        countAdd: () => {
          set(state => ({
            ...state,
            renderedMessagesCount: state.renderedMessagesCount + 1,
          }))
        },
        messages: [],
        reset: async () => {
          set(state => {
            return {
              ...state,
              renderedMessagesCount: 0,
              messages: [],
            }
          })

          const endpoint = endpoints[Endpoints.ResetConversation]
          await endpoint()
        },
        add: async (message: MessageType) => {
          set((state: ChatStore) => ({
            ...state,
            messages: [...state.messages, message],
          }))
          useModelManager.setState(state => ({
            ...state,
            vojtaState: VojtaState.Thinking,
          }))

          const endpoint = endpoints[Endpoints.Ask]
          const response = await endpoint(message.text)
          const aiMessage = await response.json()

          useModelManager.setState(state => ({
            ...state,
            vojtaState: VojtaState.Init,
          }))

          set((state: ChatStore) => ({
            ...state,
            messages: [
              ...state.messages,
              createVojtaMessage(aiMessage.content),
            ],
          }))
        },
      }

      return value
    },
    {
      name: 'Chat',
    }
  )
)
