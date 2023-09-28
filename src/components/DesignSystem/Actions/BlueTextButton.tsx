import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const BlueTextButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={'text-blue-500 hover:underline'}>
      {children}
    </button>
  )
}
