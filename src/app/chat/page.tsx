'use client'

import { ChatPageContentContainer } from '@/components/DesignSystem/Layout'
import { Header } from '@/app/chat/components/Header'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { chatFallbackError } from '@/app/chat/components/ChatError'
import { ChatWithVojta } from '@/app/chat/components/ChatWithVojta'

const Chat = () => {
  return (
    <ErrorBoundary fallbackRender={chatFallbackError}>
      <Header />
      <ChatPageContentContainer>
        <ChatWithVojta />
      </ChatPageContentContainer>
    </ErrorBoundary>
  )
}

export default Chat
