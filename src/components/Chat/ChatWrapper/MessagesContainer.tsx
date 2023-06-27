import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const MessagesContainer: FC<Props> = ({ children }) => {
  return <div className="flex flex-col min-w-3xl">{children}</div>
}
