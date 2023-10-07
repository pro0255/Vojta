'use client'

import { ReactNode, useState } from 'react'
import { useCreateCopyToClipboard } from '@/hooks/useCreateCopyToClipboard'
import { prefixWithHost } from '@/helpers/mix/prefixWithHost'

type Props = {
  children: ReactNode
  href: string
}

export const AnchoredTitle = ({ href, children }: Props) => {
  const copyToClipboard = useCreateCopyToClipboard(prefixWithHost(href))
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
    >
      {children}

      {isHovered && (
        <span onClick={copyToClipboard} className={'hover:text-blue-700'}>
          {' '}
          #
        </span>
      )}
    </a>
  )
}
