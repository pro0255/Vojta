import React, { FC, ReactNode } from 'react'
import { Footer } from '@/components/Chat/components/Footer/Footer'

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
