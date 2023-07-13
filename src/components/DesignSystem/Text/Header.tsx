import { FC } from 'react'

type Props = {
  children: string
}
export const HeaderOne: FC<Props> = ({ children }) => {
  return <h1>{children}</h1>
}
export const HeaderTwo: FC<Props> = ({ children }) => {
  return <h2>{children}</h2>
}
export const HeaderThree: FC<Props> = ({ children }) => {
  return <h3>{children}</h3>
}

export const Header = {
  One: HeaderOne,
  Two: HeaderTwo,
  Three: HeaderThree,
}
