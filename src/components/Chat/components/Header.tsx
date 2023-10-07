import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'
import React from 'react'
import { ResetConversation } from '@/components/Chat/components/Actions/ResetConversation/ResetConversation'
import { ScrollTo } from '@/components/Chat/components/Actions/ScrollTo'

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
