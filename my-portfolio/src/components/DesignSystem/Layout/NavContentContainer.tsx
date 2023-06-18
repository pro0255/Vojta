import { FC, ReactNode } from 'react'

type Props = {
  nav: ReactNode
  content: ReactNode
}
export const NavContentContainer: FC<Props> = ({ content, nav }) => {
  return (
    <div className="grid grid-cols-[20%_80%] content-center w-full max-w-md">
      {nav}
      {content}
    </div>
  )
}
