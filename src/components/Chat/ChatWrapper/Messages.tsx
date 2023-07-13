import React, { FC } from 'react'
import { Message } from '@/components/Chat/ChatWrapper/Message'
import { useChatStore } from '@/components/Chat/store/chat'

export const Messages: FC = () => {
  const messages = useChatStore(state => state.messages)

  return (
    <ul>
      {messages.map((message, index) => {
        return (
          <li key={index}>
            <Message
              author={message.author}
              text={message.text}
              timestamp={message.timestamp}
            />
          </li>
        )
      })}
    </ul>
  )
}
