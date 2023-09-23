'use client'

import React, { FC, useEffect, useState } from 'react'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { ChatStore, useChatStore } from '@/components/Chat/store/chat'
import { RenderingMessage } from '@/components/Chat/ChatWrapper/RenderingMessage'
import { Author } from '@/components/Chat/types'
import { useModelManager } from '@/Three/store/useModelManager'
import { VojtaState } from '@/Three/store/types'
import { scroll } from '@/helpers'
import { Endpoints, endpoints } from '@/fetcher/endpoints'
import { HistoryMessage } from '@/fetcher/types'
import { useMutation } from 'react-query'
import { createHistory } from '@/components/Chat/utils/createHistory'
import { MessagesContainer } from '@/components/Chat/ChatWrapper/MessagesContainer'
import { motion } from 'framer-motion'
import { VojtaThinking } from '@/components/Chat/components/Vojta/VojtaThinking'

type UseMessages = {
  renderedMessages: ChatStore['messages']
  renderingMessage: ChatStore['messages'][0] | undefined
  setAsRendered: () => void
  setVojtaTalking: () => void
}

const setConversation = async (history: Array<HistoryMessage>) => {
  console.log(history)
  const endpoint = endpoints[Endpoints.SetConversation]
  return await endpoint(history)
}

const useMessages = (): UseMessages => {
  const setVojtaState = useModelManager(
    modelManager => modelManager.setVojtaState
  )

  const { renderedMessagesCount, countAdd, messages } = useChatStore(state => ({
    messages: state.messages,
    renderedMessagesCount: state.renderedMessagesCount,
    countAdd: state.countAdd,
  }))

  const { mutate } = useMutation(Endpoints.SetConversation, () =>
    setConversation(createHistory(messages))
  )

  useEffect(() => {
    mutate()
  }, [])

  const [renderingIndex, setRenderingIndex] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    scroll.scrollToBottom()
  }, [renderedMessagesCount])

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

    const isRendered = renderedMessagesCount >= indexOfLastMessage
    if (isRendered) {
      return
    }

    if (lastMessage.author === Author.Vojta) {
      setRenderingIndex(indexOfLastMessage)
    } else {
      countAdd()
    }
  }, [messages])

  const renderedMessages: UseMessages['renderedMessages'] = messages.slice(
    0,
    renderedMessagesCount + 1
  )
  const renderingMessage: UseMessages['renderingMessage'] = renderingIndex
    ? messages[renderingIndex]
    : undefined

  const setAsRendered = () => {
    countAdd()
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
    <MessagesContainer>
      <motion.ul>
        {renderedMessages.map(message => {
          return (
            <motion.li
              key={message.timestamp}
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'anticipate', duration: 2 }}
            >
              <MessageView
                author={message.author}
                content={message.text}
                timestamp={message.timestamp}
              />
            </motion.li>
          )
        })}

        {renderingMessage && (
          <motion.li
            key={renderingMessage.timestamp}
            animate={{ opacity: [0, 1] }}
            transition={{ ease: 'anticipate', duration: 2 }}
          >
            <RenderingMessage
              {...renderingMessage}
              atStart={setVojtaTalking}
              atEnd={setAsRendered}
            />
          </motion.li>
        )}
      </motion.ul>
      <VojtaThinking />
    </MessagesContainer>
  )
}
