import React, { FC, ReactNode } from 'react'
import { Footer } from '@/app/chat/components/Footer'

type Props = {
  children: ReactNode
}

export const MessagesContainer: FC<Props> = ({ children }) => {
  return (
    <>
      <main className={'w-full'}>{children}</main>
      <Footer />
    </>
  )
}
