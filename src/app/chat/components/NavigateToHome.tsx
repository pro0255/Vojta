import Link from 'next/link'
import React, { FC } from 'react'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const NavigateToHome: FC = () => {
  return (
    <Link className="absolute right-[2%]" href={'/home'}>
      <CircleContainer>
        <AiOutlineArrowRight />
      </CircleContainer>
    </Link>
  )
}
