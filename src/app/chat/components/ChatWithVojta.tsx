'use client'

import React from 'react'
import { Messages } from '@/app/chat/components/Messages'
import { Avatars } from '@/app/chat/components/Avatars'

export const ChatWithVojta = () => {
  return (
    <main className="flex flex-col z-20 w-[70%] md:w-[55%]">
      <Messages />
      <div className={'hidden md:inline'}>
        <Avatars />
      </div>
    </main>
  )
}
