import React from 'react'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'
import { Avatars } from '@/components/Chat/components/Avatars'

export const ChatWrapper = () => {
  return (
    <div className="flex flex-col z-20">
      <Messages />
      <Avatars />
    </div>
  )
}
