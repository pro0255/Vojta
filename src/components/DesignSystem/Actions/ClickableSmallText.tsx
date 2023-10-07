import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ClickableSmallText = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={'text-xs text-black hover:underline'}>
      {children}
    </button>
  )
}
