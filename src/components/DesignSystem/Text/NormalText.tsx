import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const NormalText: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
