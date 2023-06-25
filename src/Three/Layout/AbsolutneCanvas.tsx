'use client'

import { FC, ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { ABSOLUTE_CSS } from '@/Three/constants'

type Props = {
  children: ReactNode
}

export const AbsoluteCanvas: FC<Props> = ({ children }) => {
  return <Canvas style={ABSOLUTE_CSS}>{children}</Canvas>
}
