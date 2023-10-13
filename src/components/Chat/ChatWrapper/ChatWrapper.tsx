'use client'

import React from 'react'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'
import { Avatars } from '@/components/Chat/components/Avatars'

export const ChatWrapper = () => {
  return (
    <main className="flex flex-col z-20 w-[55%]">
      <Messages />
      <div className={'hidden md:inline'}>
        <Avatars />
      </div>
    </main>
  )
}
