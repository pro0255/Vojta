import { FC } from 'react'

type Props = {
  children: string
}
export const HeaderOne: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
export const HeaderTwo: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
export const HeaderThree: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}

export const Header = {
  One: HeaderOne,
  Two: HeaderTwo,
  Three: HeaderThree,
}
