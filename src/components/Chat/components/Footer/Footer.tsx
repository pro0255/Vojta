import { Input } from '@/components/DesignSystem'
import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'
import React, { useState } from 'react'

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <footer className="fixed bottom-0 left-0 w-[calc(100%)] h-[20%] bg-slate-100 border-t-2 border-b-slate-100 z-40 flex flex-col items-center justify-center z-40">
      <div onClick={() => setIsVisible(false)}>Hover</div>
      <Input />
      <NavigateToHome />
    </footer>
  )
}
