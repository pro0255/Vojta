import { NavigateToHome } from '@/app/chat/components/NavigateToHome'
import React from 'react'
import { ResetConversation } from '@/app/chat/components/ResetConversation/ResetConversation'
import { ScrollTo } from '@/app/chat/components/ScrollTo'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white relative flex flex-row items-center justify-center w-full min-h-[50px] shadow-xl">
      <div className={'flex flex-row'}>
        <span className={'mr-2'}>
          <ScrollTo target={'top'} />
        </span>
        <span className={'mr-2'}>
          <ScrollTo target={'bottom'} />
        </span>

        <ResetConversation />
      </div>
      <NavigateToHome />
    </header>
  )
}
