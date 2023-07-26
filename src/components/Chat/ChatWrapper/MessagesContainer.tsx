import React, { FC, ReactNode } from 'react'
import { Input } from '@/components/DesignSystem'
import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'

type Props = {
  children: ReactNode
}
export const MessagesContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-2xl max-w-2xl">
      <section>
        <main>{children}</main>
      </section>

      <footer className="fixed bottom-0 left-0 w-[calc(100%)] h-[20%] bg-slate-100 border-t-2 border-b-slate-100 z-40 flex flex-row items-center justify-center z-40">
        <Input />

        <NavigateToHome />
      </footer>
    </div>
  )
}
