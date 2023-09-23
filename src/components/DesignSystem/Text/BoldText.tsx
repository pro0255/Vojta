import { CSSProperties, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}
export const BoldText: FC<Props> = ({ children, ...props }) => {
  return (
    <span className={'text-base font-bold text-black'} {...props}>
      {children}
    </span>
  )
}
