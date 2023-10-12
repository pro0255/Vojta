'use client'

import { ChatWithMe } from '@/components/Chat/ChatWithMe'
import { ChatPageContentContainer } from '@/components/DesignSystem/Layout'
import { Header } from '@/components/Chat/components/Header'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Chat = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Header />
      <ChatPageContentContainer>
        <ChatWithMe />
      </ChatPageContentContainer>
    </ErrorBoundary>
  )
}

export default Chat
