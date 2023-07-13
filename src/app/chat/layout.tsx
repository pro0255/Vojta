import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ChatLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}
