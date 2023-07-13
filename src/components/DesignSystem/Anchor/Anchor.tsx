import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Anchor: FC<Props> = ({ children }) => {
  return <span className="block p-1 w-full hover:bg-slate-50">{children}</span>
}
