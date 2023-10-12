'use client'

import { ChatWithMe } from '@/components/Chat/ChatWithMe'
import { ChatPageContentContainer } from '@/components/DesignSystem/Layout'
import { Header } from '@/components/Chat/components/Header'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { chatFallbackError } from '@/components/Chat/components/ChatError'

const Chat = () => {
  return (
    <ErrorBoundary fallbackRender={chatFallbackError}>
      <Header />
      <ChatPageContentContainer>
        <ChatWithMe />
      </ChatPageContentContainer>
    </ErrorBoundary>
  )
}

export default Chat
