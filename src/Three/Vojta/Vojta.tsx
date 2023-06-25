'use client'

import React from 'react'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'
import { InCorner } from '@/Three/Vojta/InCorner/InCorner'

export const Vojta = () => {
  const isScrollBar = useIsScrollbar()
  console.log(isScrollBar)

  if (!isScrollBar) {
    return <InCorner />
  }

  return null
}
