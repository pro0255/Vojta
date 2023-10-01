import { create, StoreApi, UseBoundStore } from 'zustand'
import { ReactNode } from 'react'
import { v4 } from 'uuid'

export type FlashMessageType = {
  content: ReactNode | string
  title: string
  id: string
  visible: boolean
}

export type FlashMessageInputType = Pick<FlashMessageType, 'content' | 'title'>

export type FlashMessagesStore = {
  messages: Array<FlashMessageType>
  add: (newFlashMessage: FlashMessageInputType, ttl?: number) => void
  remove: (id: string) => void
  hoveredMessage: string | null
  setHoveredMessage: (hoveredMessage: string | null) => void
  manualRemove: string[]
  removeFromManualRemove: (id: string) => void
}

export const useFlashMessages: UseBoundStore<StoreApi<FlashMessagesStore>> =
  create((set, get) => {
    const value: FlashMessagesStore = {
      removeFromManualRemove: id => {
        set(store => {
          return {
            ...store,
            manualRemove: store.manualRemove.filter(
              messageId => messageId !== id
            ),
          }
        })
      },
      manualRemove: [],
      setHoveredMessage: hoveredMessage => {
        set(store => {
          return {
            ...store,
            hoveredMessage,
          }
        })
      },
      hoveredMessage: null,
      remove: (messageId: string) => {
        set(store => {
          return {
            ...store,
            messages: store.messages.map(message => {
              if (message.id === messageId) {
                return {
                  ...message,
                  visible: false,
                }
              }
              return message
            }),
          }
        })
      },
      messages: [],
      add: (newFlashMessage, ttl = 2000) => {
        const messageId = v4()
        set(store => {
          return {
            ...store,
            messages: [
              ...store.messages,
              { ...newFlashMessage, id: messageId, visible: true },
            ],
          }
        })

        setTimeout(() => {
          if (messageId === get().hoveredMessage) {
            set(store => {
              return {
                ...store,
                manualRemove: [...store.manualRemove, messageId],
              }
            })
          } else {
            set(store => {
              return {
                ...store,
                messages: store.messages.map(message => {
                  if (message.id === messageId) {
                    return {
                      ...message,
                      visible: false,
                    }
                  }
                  return message
                }),
              }
            })
          }
        }, ttl)

        setTimeout(() => {
          set(store => {
            return {
              ...store,
              messages: store.messages.filter(message => message.visible),
            }
          })
        }, ttl + 500)
      },
    }

    return value
  })
