import { FC } from 'react'

type Props = {
  children: string
}
const HeaderOne: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
const HeaderTwo: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}
const HeaderThree: FC<Props> = ({ children }) => {
  return <span>{children}</span>
}

export const Header = {
  One: HeaderOne,
  Two: HeaderTwo,
  Three: HeaderThree,
}
