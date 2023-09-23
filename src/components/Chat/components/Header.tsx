import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'
import React from 'react'

export const Header = () => {
  return (
    <header className="relative flex flex-row items-center justify-center w-full min-h-[50px] shadow-xl">
      <NavigateToHome />
    </header>
  )
}
