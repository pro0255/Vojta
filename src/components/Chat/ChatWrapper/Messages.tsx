import React, { FC, useEffect, useState } from 'react'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { ChatStore, useChatStore } from '@/components/Chat/store/chat'
import { RenderingMessage } from '@/components/Chat/ChatWrapper/RenderingMessage'
import { Author } from '@/components/Chat/types'
import { useModelManager } from '@/Three/store/useModelManager'
import { VojtaState } from '@/Three/store/types'
import { scroll } from '@/helpers'

type UseMessages = {
  renderedMessages: ChatStore['messages']
  renderingMessage: ChatStore['messages'][0] | undefined
  setAsRendered: () => void
  setVojtaTalking: () => void
}

const useMessages = (): UseMessages => {
  const setVojtaState = useModelManager(
    modelManager => modelManager.setVojtaState
  )
  const messages = useChatStore(state => state.messages)
  const [renderedCount, setRenderedCount] = useState(-1)
  const [renderingIndex, setRenderingIndex] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    scroll.scrollToBottom()
  }, [renderedCount])

  const setVojtaTalking = () => {
    setVojtaState(VojtaState.Talking)
  }

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
    setRenderedCount(lastCount => lastCount + 1)
    setRenderingIndex(undefined)
    setVojtaState(VojtaState.Init)
  }

  return {
    renderedMessages,
    renderingMessage,
    setAsRendered,
    setVojtaTalking,
  }
}

export const Messages: FC = () => {
  const { renderedMessages, renderingMessage, setAsRendered, setVojtaTalking } =
    useMessages()

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
            atStart={setVojtaTalking}
            atEnd={setAsRendered}
          />
        </li>
      )}
    </ul>
  )
}
