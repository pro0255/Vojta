import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const GrayText: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
