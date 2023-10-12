import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Paragraph: FC<Props> = ({ children, className }) => {
  return <p className={`mt-5 break-words ${className}`}>{children}</p>
}
