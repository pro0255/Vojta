import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Text: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
