import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const NotChatPageContentContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mt-30 mb-10 flex justify-center flex-row mx-auto">
      {children}
    </div>
  )
}
