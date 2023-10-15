import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Tag: FC<Props> = ({ children, className }) => {
  return <span className={`p-2 ml-2 ${className}`}>{children}</span>
}
