import { FC, ReactNode } from 'react'
import { SmNavigation } from '@/components/DesignSystem/Layout/SmNavigation'

type Props = {
  nav: ReactNode
  content: ReactNode
}
export const NavContentContainer: FC<Props> = ({ content, nav }) => {
  return (
    <div className="max-w-[80%] md:max-w-[65%] xl:max-w-[60%] 2xl:max-w-[40%]">
      <SmNavigation />
      <div className={'flex flex-row '}>
        <div className={'hidden md:inline'}>{nav}</div>
        {content}
      </div>
    </div>
  )
}
