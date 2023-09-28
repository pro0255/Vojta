import React, { FC, ReactNode } from 'react'
import { Footer } from '@/components/Chat/components/Footer/Footer'

type Props = {
  children: ReactNode
}
export const MessagesContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-2xl max-w-2xl">
      <main className={'mb-40'}>{children}</main>
      <Footer />
    </div>
  )
}
