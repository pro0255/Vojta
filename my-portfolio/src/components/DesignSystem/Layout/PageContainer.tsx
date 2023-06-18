import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const PageContainer: FC<Props> = ({ children }) => {
  return (
    <div className="grid justify-items-center content-center w-full h-full">
      {children}
    </div>
  )
}
