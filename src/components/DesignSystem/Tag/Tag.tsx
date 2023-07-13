import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Tag: FC<Props> = ({ children }) => {
  return <span className="p-2 ml-2 bg-slate-100">{children}</span>
}
