'use client'

import { ReactNode, useState } from 'react'
import { useCreateCopyToClipboard } from '@/hooks/useCreateCopyToClipboard'
import { prefixWithHost } from '@/helpers/mix/prefixWithHost'

type Props = {
  children: ReactNode
  href: string
}

export const AnchoredTitle = ({ href, children }: Props) => {
  const _copyToClipboard = useCreateCopyToClipboard(prefixWithHost(href))
  const [isHovered, setIsHovered] = useState(false)

  const copyToClipboard = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    _copyToClipboard()
  }

  return (
    <a
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
    >
      {children}

      {isHovered && (
        <span
          onClick={copyToClipboard}
          className={'text-gray-500 hover:text-black'}
        >
          {' '}
          #
        </span>
      )}
    </a>
  )
}
