'use client'

import React, { FC, useEffect } from 'react'

import { SlowMessage } from '@/app/chat/components/SlowMessage'
import { Author, MessageType } from '@/app/chat/types'
import { useModelManager } from '@/3d/store/useModelManager'
import { VojtaState } from '@/3d/store/types'
import { scroll } from '@/helpers'
import { Endpoints, endpoints } from '@/fetcher/endpoints'
import { HistoryMessage } from '@/fetcher/types'
import { useMutation } from 'react-query'
import { createHistory } from '@/app/chat/utils/createHistory'
import { MessagesContainer } from '@/app/chat/components/MessagesContainer'
import { motion } from 'framer-motion'
import { VojtaThinking } from '@/app/chat/components/VojtaThinking'
import { VojtaGPTText } from '@/app/chat/components/VojtaGPTText'
import { StartingConversations } from '@/app/chat/components/StartingConversations/StartingConversations'
import { AnimatedListItem } from '@/app/chat/components/AnimatedListItem'
import { Spinner } from '@/components/DesignSystem/Spinner'
import { ChatStore, useChatLoader, useChatStore } from '@/app/chat/chatStore'

type UseMessages = {
  messages: ChatStore['messages']
  setAsRendered: () => void
  setVojtaTalking: () => void
  isRenderedLast: boolean
  isHydrated: boolean
  setMessageAsRendered: (message: MessageType) => void
}

const setConversation = async (history: Array<HistoryMessage>) => {
  const endpoint = endpoints[Endpoints.SetConversation]
  return await endpoint(history)
}

const useMessages = (): UseMessages => {
  const { setVojtaState } = useModelManager(modelManager => ({
    setVojtaState: modelManager.setVojtaState,
    vojtaState: modelManager.vojtaState,
  }))
  const {
    renderedMessagesCount,
    countAdd,
    messages,
    setNewMessagesTuple,
    setMessageAsRendered,
  } = useChatStore(state => ({
    messages: state.messages,
    renderedMessagesCount: state.renderedMessagesCount,
    countAdd: state.countAdd,
    setNewMessagesTuple: state.setNewMessageTuple,
    setMessageAsRendered: state.setRendered,
  }))

  const isHydrated = useChatLoader(store => store.isHydrated)

  const { mutate } = useMutation(
    Endpoints.SetConversation,
    () => setConversation(createHistory(messages)),
    {
      useErrorBoundary: true,
    }
  )

  useEffect(() => {
    mutate()
  }, [])

  useEffect(() => {
    scroll.scrollToBottom()
  }, [renderedMessagesCount])

  const setVojtaTalking = () => {
    countAdd()
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

    if (lastMessage.author !== Author.Vojta) {
      countAdd()
    }
  }, [messages])

  const setAsRendered = () => {
    setVojtaState(VojtaState.Init)
    setNewMessagesTuple(false)
  }

  const isRenderedLast = renderedMessagesCount === messages.length

  return {
    setMessageAsRendered,
    isRenderedLast,
    messages,
    setAsRendered,
    setVojtaTalking,
    isHydrated,
  }
}

export const Messages: FC = () => {
  const {
    messages,
    setAsRendered,
    setVojtaTalking,
    isRenderedLast,
    isHydrated,
    setMessageAsRendered,
  } = useMessages()

  if (!isHydrated) {
    return (
      <div
        className={
          'mt-[35%] flex flex-col items-center justify-center h-full w-full'
        }
      >
        <Spinner />
      </div>
    )
  }

  return (
    <MessagesContainer>
      <VojtaGPTText />

      <div className={'mt-28'}>
        <StartingConversations />
      </div>

      <motion.ul className={'w-full mb-24'}>
        {messages.map((message, index) => {
          const isLastFromVojta =
            message.author === Author.Vojta && index === messages.length - 1
          const isRenderingMessage =
            isLastFromVojta && !isRenderedLast && !message.isRendered

          return (
            <AnimatedListItem key={`${message.timestamp}`}>
              <SlowMessage
                message={message}
                setIsRendered={setMessageAsRendered}
                isSlowMessage={isRenderingMessage}
                atStart={setVojtaTalking}
                atEnd={setAsRendered}
              />
            </AnimatedListItem>
          )
        })}

        <AnimatedListItem>
          <VojtaThinking />
        </AnimatedListItem>
      </motion.ul>
    </MessagesContainer>
  )
}
