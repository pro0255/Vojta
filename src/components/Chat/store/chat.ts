import { create, StoreApi, UseBoundStore } from 'zustand'
import { MessageType } from '@/components/Chat/types'
import { persist } from 'zustand/middleware'
import { endpoints, Endpoints } from '@/fetcher/endpoints'
import { createVojtaMessage } from '@/components/Chat/utils/createMessage'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'
import { scroll } from '@/helpers'

export type ChatStore = {
  newMessageTuple: boolean
  setNewMessageTuple: (value: boolean) => void
  messages: Array<MessageType>
  add: (message: MessageType) => void
  reset: () => void
  renderedMessagesCount: number
  countAdd: () => void
  setRendered: (message: MessageType) => void
}

export type ChatStoreLoader = {
  isHydrated: boolean
}

export const useChatLoader: UseBoundStore<StoreApi<ChatStoreLoader>> = create(
  () => {
    const value: ChatStoreLoader = {
      isHydrated: false,
    }
    return value
  }
)

export const useChatStore: UseBoundStore<StoreApi<ChatStore>> = create(
  persist(
    (set, get) => {
      const value: ChatStore = {
        setRendered: inputMessage => {
          set(store => {
            return {
              ...store,
              messages: store.messages.map(message => {
                if (message === inputMessage) {
                  return {
                    ...message,
                    isRendered: true,
                  }
                }

                return message
              }),
            }
          })
        },
        setNewMessageTuple: (newMessageTuple: boolean) => {
          set(state => {
            return {
              ...state,
              newMessageTuple,
            }
          })
        },
        newMessageTuple: false,
        renderedMessagesCount: 0,
        countAdd: () => {
          if (get().renderedMessagesCount < get().messages.length) {
            set(state => ({
              ...state,
              renderedMessagesCount: state.renderedMessagesCount + 1,
            }))
          }
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
            newMessageTuple: true,
            messages: [...state.messages, message],
          }))
          scroll.scrollToBottom()

          setTimeout(() => {
            useModelManager.setState(state => ({
              ...state,
              vojtaState: VojtaState.Thinking,
            }))

            setTimeout(() => {
              scroll.scrollToBottom()
            }, 100)
          }, 500)

          await new Promise(resolve => setTimeout(resolve, 2000))

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

          scroll.scrollToBottom()
        },
      }

      return value
    },
    {
      name: 'Chat',
      onRehydrateStorage: () => () => {
        useChatLoader.setState({ isHydrated: true })
      },
    }
  )
)
