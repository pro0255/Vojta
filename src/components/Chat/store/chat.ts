import { create, StoreApi, UseBoundStore } from 'zustand'
import { MessageType } from '@/components/Chat/types'
import { agent } from '@/components/Chat/domain/agent'
import { createMockedMessages } from '@/components/Chat/mock/mockedMessages'
import { useModelManager } from '@/Three/store/useModelManager'
import { VojtaState } from '@/Three/store/types'

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

      useModelManager.setState(state => ({
        ...state,
        vojtaState: VojtaState.Thinking,
      }))
      const responseFromAgent = await agent.ask(message.text)
      useModelManager.setState(state => ({
        ...state,
        vojtaState: VojtaState.Init,
      }))

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
