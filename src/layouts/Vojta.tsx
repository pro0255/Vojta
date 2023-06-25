import { FC, ReactNode } from 'react'
import { AbsoluteCanvas } from '@/Three/Layout/AbsolutneCanvas'
import { Vojta } from '@/Three/Vojta/Vojta'

type Props = {
  children: ReactNode
}
export const LayoutVojta: FC<Props> = ({ children }) => {
  return (
    <>
      <AbsoluteCanvas>
        <Vojta />
      </AbsoluteCanvas>
      {children}
    </>
  )
}
