import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ContentContainer: FC<Props> = ({ children }) => {
  return <div className="flex flex-col w-full">{children}</div>
}
