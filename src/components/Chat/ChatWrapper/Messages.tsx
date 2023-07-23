import React, { FC, useEffect, useState } from 'react'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { ChatStore, useChatStore } from '@/components/Chat/store/chat'
import { RenderingMessage } from '@/components/Chat/ChatWrapper/RenderingMessage'
import { Author } from '@/components/Chat/types'

type UseMessages = {
  renderedMessages: ChatStore['messages']
  renderingMessage: ChatStore['messages'][0] | undefined
  setAsRendered: () => void
}

const useMessages = (): UseMessages => {
  const messages = useChatStore(state => state.messages)
  const [renderedCount, setRenderedCount] = useState(-1)
  const [renderingIndex, setRenderingIndex] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    const lastMessage = messages.slice(-1)?.[0]

    if (!lastMessage) {
      return
    }

    const indexOfLastMessage = messages.findIndex(
      message => message === lastMessage
    )

    const isRendered = renderedCount >= indexOfLastMessage
    if (isRendered) {
      return
    }

    if (lastMessage.author === Author.Vojta) {
      setRenderingIndex(indexOfLastMessage)
    } else {
      setRenderedCount(lastCount => lastCount + 1)
    }
  }, [messages])

  const renderedMessages: UseMessages['renderedMessages'] = messages.slice(
    0,
    renderedCount + 1
  )
  const renderingMessage: UseMessages['renderingMessage'] = renderingIndex
    ? messages[renderingIndex]
    : undefined

  const setAsRendered = () => {
    console.log('calling next')
    setRenderedCount(lastCount => lastCount + 1)
    setRenderingIndex(undefined)
  }

  return { renderedMessages, renderingMessage, setAsRendered }
}

export const Messages: FC = () => {
  const { renderedMessages, renderingMessage, setAsRendered } = useMessages()

  return (
    <ul>
      {renderedMessages.map(message => {
        return (
          <li key={message.timestamp}>
            <MessageView
              author={message.author}
              text={message.text}
              timestamp={message.timestamp}
            />
          </li>
        )
      })}

      {renderingMessage && (
        <li key={renderingMessage.timestamp}>
          <RenderingMessage
            {...renderingMessage}
            setAsRendered={setAsRendered}
          />
        </li>
      )}
    </ul>
  )
}
