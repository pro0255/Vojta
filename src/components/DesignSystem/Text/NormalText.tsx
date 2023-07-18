import { CSSProperties, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}
export const NormalText: FC<Props> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>
}
