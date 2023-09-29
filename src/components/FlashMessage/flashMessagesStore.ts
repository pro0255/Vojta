import { create, StoreApi, UseBoundStore } from 'zustand/esm'
import { ReactNode } from 'react'
import { v4 } from 'uuid'

export type FlashMessageType = {
  content: ReactNode
  title: string
  id: string
}

export type FlashMessageInputType = Pick<FlashMessageType, 'content' | 'title'>

export type FlashMessagesStore = {
  messages: Array<FlashMessageType>
  add: (newFlashMessage: FlashMessageInputType, ttl: number) => void
}

export const useFlashMessages: UseBoundStore<StoreApi<FlashMessagesStore>> =
  create((set, get) => {
    const value: FlashMessagesStore = {
      messages: [],
      add: (newFlashMessage, ttl = 2000) => {
        const messageId = v4()
        set(store => {
          return {
            ...store,
            messages: [
              ...store.messages,
              { ...newFlashMessage, id: messageId },
            ],
          }
        })

        setTimeout(() => {
          set(store => {
            return {
              ...store,
              messages: store.messages.filter(
                message => message.id !== messageId
              ),
            }
          })
        }, ttl)
      },
    }

    return value
  })
