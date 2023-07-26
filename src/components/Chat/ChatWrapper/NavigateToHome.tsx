import Link from 'next/link'
import { ArrowRight } from '@/Three/components/PickAvatar'
import React, { FC } from 'react'

export const NavigateToHome: FC = () => {
  return (
    <Link className="absolute right-[2%]" href={'/home'}>
      <ArrowRight />
    </Link>
  )
}
