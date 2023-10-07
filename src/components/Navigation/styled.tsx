'use client'

import Link from 'next/link'
import React, { ComponentProps, FC } from 'react'
import { usePathname } from 'next/navigation'

export const StyledLink: FC<ComponentProps<typeof Link>> = props => {
  const pathName = usePathname()

  const isActive = pathName === props.href

  return (
    <Link
      {...props}
      className={`transition-all duration-200 block p-1 w-full ${
        isActive ? 'bg-slate-50' : 'hover:hoveredWithoutBorder'
      }`}
    />
  )
}
