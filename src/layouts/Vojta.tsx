'use client'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const LayoutVojta: FC<Props> = ({ children }) => {
  return (
    <>
      {/*<AbsoluteCanvas>*/}
      {/*  <Vojta />*/}
      {/*</AbsoluteCanvas>*/}
      {children}
    </>
  )
}
