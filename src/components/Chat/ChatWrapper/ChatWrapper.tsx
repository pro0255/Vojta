import React from 'react'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'

export const ChatWrapper = () => {
  return (
    <div className="flex flex-col z-20">
      <Messages />
      {/*<Avatars />*/}
    </div>
  )
}
