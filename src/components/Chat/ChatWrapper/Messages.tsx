import React, { FC } from 'react'
import { MessageType } from '@/components/Chat/types'
import { Message } from '@/components/Chat/ChatWrapper/Message'

type Props = {
  messages: Array<MessageType>
}

export const Messages: FC<Props> = ({ messages }) => {
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
