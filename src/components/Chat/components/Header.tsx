import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'
import React from 'react'
import { ResetConversation } from '@/components/Chat/components/Actions/ResetConversation/ResetConversation'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white relative flex flex-row items-center justify-center w-full min-h-[50px] shadow-xl">
      <ResetConversation />
      <NavigateToHome />
    </header>
  )
}
