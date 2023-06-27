'use client'

import React from 'react'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'
import { InCorner } from '@/Three/Vojta/InCorner/InCorner'
import { usePathname } from 'next/navigation'
import { ModelRenderer } from '@/Three/ModelRenderer/ModelRenderer'

export const Vojta = () => {
  const isScrollBar = useIsScrollbar()
  const pathName = usePathname()
  console.log(isScrollBar, pathName)

  if (!isScrollBar && pathName !== '/') {
    return <InCorner />
  }

  if (pathName === '/') {
    return <ModelRenderer color={'red'} position={[3.5, 0, 0]} />
  }

  return null
}
