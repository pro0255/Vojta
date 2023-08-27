import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const GrayText: FC<Props> = ({ children }) => {
  return <span className="text-sm test-red-300">{children}</span>
}
