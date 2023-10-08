import { CSSProperties, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}
export const BoldText: FC<Props> = ({ children, className, ...props }) => {
  return (
    <span className={`text-bold text-black break-all ${className}`} {...props}>
      {children}
    </span>
  )
}
