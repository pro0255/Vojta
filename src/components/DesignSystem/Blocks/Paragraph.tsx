import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Paragraph: FC<Props> = ({ children }) => {
  return <p className="mt-5">{children}</p>
}
