'use client'

import React from 'react'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'

export const ChatWrapper = () => {
  return (
    <main className="flex flex-col z-20 w-[55%]">
      <Messages />
      {/*<Avatars />*/}
    </main>
  )
}
