import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const PageContentContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mb-40 flex justify-center flex-row mx-auto">{children}</div>
  )
}
