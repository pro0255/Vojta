import { FC, ReactNode } from 'react'
import { SmNavigation } from '@/components/DesignSystem/Layout/SmNavigation'

type Props = {
  nav: ReactNode
  content: ReactNode
}
export const NavContentContainer: FC<Props> = ({ content, nav }) => {
  return (
    <div className="w-[80%] md:w-[65%] xl:w-[50%] 2xl:w-[40%]">
      <SmNavigation />
      <div className={'flex flex-row '}>
        <div className={'hidden md:inline'}>{nav}</div>
        {content}
      </div>
    </div>
  )
}
