import { create, StoreApi, UseBoundStore } from 'zustand'
import { MessageType } from '@/components/Chat/types'
import { agent } from '@/components/Chat/domain/agent'
import { useVojtaStore } from '@/components/Chat/store/vojta'
import { createMockedMessages } from '@/components/Chat/mock/mockedMessages'

export type ChatStore = {
  messages: Array<MessageType>
  add: (message: MessageType) => void
}

export const useChatStore: UseBoundStore<StoreApi<ChatStore>> = create(set => {
  const value: ChatStore = {
    messages: [...createMockedMessages(60)],
    add: async (message: MessageType) => {
      set((state: ChatStore) => ({
        ...state,
        messages: [...state.messages, message],
      }))

      useVojtaStore.setState({ isThinking: true })
      const responseFromAgent = await agent.ask(message.text)
      useVojtaStore.setState({ isThinking: false })

      set((state: ChatStore) => ({
        ...state,
        messages: [
          ...state.messages,
          agent.createMessage(responseFromAgent as string),
        ],
      }))
    },
  }

  return value
})
