'use client'

import { ChatWithMe } from '@/components/Chat/ChatWithMe'
import { ChatPageContentContainer } from '@/components/DesignSystem/Layout'
import { Header } from '@/components/Chat/components/Header'

const Chat = () => {
  return (
    <>
      <Header />
      <ChatPageContentContainer>
        <ChatWithMe />
      </ChatPageContentContainer>
    </>
  )
}

export default Chat
