'use client'

import { ChatWithMe } from '@/components/Chat/ChatWithMe'
import { PageContentContainer } from '@/components/DesignSystem/Layout'
import { Header } from '@/components/Chat/components/Header'

const Chat = () => {
  return (
    <>
      <Header />
      <PageContentContainer>
        <ChatWithMe />
      </PageContentContainer>
    </>
  )
}

export default Chat
