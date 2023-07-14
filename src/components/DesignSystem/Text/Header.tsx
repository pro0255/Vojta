import { FC } from 'react'

type Props = {
  children: string
  className?: string
}
export const HeaderOne: FC<Props> = ({ children, ...props }) => {
  return <h1 {...props}>{children}</h1>
}
export const HeaderTwo: FC<Props> = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>
}
export const HeaderThree: FC<Props> = ({ children, ...props }) => {
  return <h3 {...props}>{children}</h3>
}

export const Header = {
  One: HeaderOne,
  Two: HeaderTwo,
  Three: HeaderThree,
}
