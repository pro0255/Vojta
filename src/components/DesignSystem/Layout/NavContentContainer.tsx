import { FC, ReactNode } from 'react'

type Props = {
  nav: ReactNode
  content: ReactNode
}
export const NavContentContainer: FC<Props> = ({ content, nav }) => {
  return (
    <div className="flex flex-row min-w-3xl max-w-3xl">
      {nav}
      {content}
    </div>
  )
}
