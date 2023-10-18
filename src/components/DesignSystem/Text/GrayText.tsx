import { FC, HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLSpanElement>

export const GrayText: FC<Props> = ({ children, ...props }) => {
  return (
    <span {...props} className="text-sm text-gray-500 break-normal">
      {children}
    </span>
  )
}
