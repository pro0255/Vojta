import { ScrollTo } from '@/components/Chat/components/Actions/ScrollTo'
import { ReactNode, useState } from 'react'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'
import { AiOutlineMore } from 'react-icons/ai'

type Props = {
  children: ReactNode
}

const ActionsContainer = ({ children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const isScrollBar = useIsScrollbar()

  // if (!isScrollBar) {
  //   return null
  // }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-2 bg-blue-500 rounded-full fixed bottom-20 right-12"
    >
      {isHovered ? (
        <div className={'flex flex-col items-center justify-between'}>
          {children}
        </div>
      ) : (
        <AiOutlineMore size={25} className={'fill-white'} />
      )}
    </div>
  )
}

export const Actions = () => {
  const isScrollBar = useIsScrollbar()

  if (!isScrollBar) {
    return null
  }

  return (
    <ActionsContainer>
      <div>
        <ScrollTo target={'top'} />
      </div>
      <div className={'mt-2'}>
        <ScrollTo target={'bottom'} />
      </div>
    </ActionsContainer>
  )
}
