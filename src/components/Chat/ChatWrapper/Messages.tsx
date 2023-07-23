import React, { FC, useEffect, useState } from 'react'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { ChatStore, useChatStore } from '@/components/Chat/store/chat'
import { RenderingMessage } from '@/components/Chat/ChatWrapper/RenderingMessage'
import { faker } from '@faker-js/faker'
import { Author } from '@/components/Chat/types'

type UseMessages = {
  renderedMessages: ChatStore['messages']
  renderingMessage: ChatStore['messages'][0] | undefined
  next: () => void
}

const includesMessage = (
  message: ChatStore['messages'][0],
  setOfMessages: ChatStore['messages']
) => {
  return setOfMessages.some(({ text, timestamp }) => {
    return message.text === text && message.timestamp === timestamp
  })
}

const calculateDiff = (
  renderedMessages: ChatStore['messages'],
  inQueueMessages: ChatStore['messages'],
  renderingMessage: ChatStore['messages'][0] | undefined,
  newMessages: ChatStore['messages']
) => {
  const diff: ChatStore['messages'] = []

  for (let message of newMessages) {
    if (!includesMessage(message, renderedMessages)) {
      diff.push(message)
      continue
    }

    if (renderingMessage && !includesMessage(message, [renderingMessage])) {
      diff.push(message)
      continue
    }

    if (!includesMessage(message, inQueueMessages)) {
      diff.push(message)
    }
  }

  return diff
}

const useMessages = (): UseMessages => {
  const messages = useChatStore(state => state.messages)

  const [renderedMessages, setRenderedMessages] = useState<
    UseMessages['renderedMessages']
  >([])
  const [renderingMessage, setRenderingMessage] = useState<
    UseMessages['renderingMessage']
  >({
    text: faker.lorem.text(),
    timestamp: new Date().getMilliseconds(),
    author: Author.Vojta,
  })
  const [messageToRenderQueue, setMessageToRenderQueue] = useState<
    UseMessages['renderedMessages']
  >([])

  const next = () => {
    if (renderingMessage) {
      setRenderedMessages(oldRenderedMessages => [
        ...oldRenderedMessages,
        renderingMessage,
      ])
    }

    const newRenderingMessage = messageToRenderQueue?.[0]

    if (!newRenderingMessage) {
      setRenderingMessage(undefined)
      return
    }

    setMessageToRenderQueue(oldQueue => oldQueue.slice(1))
    setRenderingMessage(newRenderingMessage)
  }

  useEffect(() => {
    const messagesToQueue = calculateDiff(
      renderedMessages,
      messageToRenderQueue,
      renderingMessage,
      messages
    )

    if (messagesToQueue.length === 1 && !renderingMessage) {
      setRenderingMessage(messagesToQueue[0])
    }

    if (messagesToQueue.length > 1 && !renderingMessage) {
      if (!renderingMessage) {
        setRenderingMessage(messagesToQueue[0])
        setMessageToRenderQueue(oldQueue => [
          ...oldQueue,
          ...messagesToQueue.slice(1),
        ])
      } else {
        setMessageToRenderQueue(oldQueue => [...oldQueue, ...messagesToQueue])
      }
    }
  }, [messages])

  return { renderedMessages, renderingMessage, next }
}

export const Messages: FC = () => {
  const { renderedMessages, renderingMessage, next } = useMessages()

  console.log('rendered', renderedMessages)
  console.log('rendering', renderingMessage)

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
            setNextRenderingMessage={next}
          />
        </li>
      )}
    </ul>
  )
}
