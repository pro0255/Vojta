import { ScrollTo } from '@/components/Chat/components/Actions/ScrollTo'
import { ResetConversation } from '@/components/Chat/components/Actions/ResetConversation/ResetConversation'
import { ReactNode } from 'react'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'

type Props = {
  children: ReactNode
}

const ActionsContainer = ({ children }: Props) => {
  return (
    <div className="p-2 flex flex-row items-center justify-around">
      {children}
    </div>
  )
}

export const ActionsTop = () => {
  const isScrollBar = useIsScrollbar()

  if (!isScrollBar) {
    return null
  }

  return (
    <ActionsContainer>
      <ScrollTo target={'top'} />
      <ResetConversation />
    </ActionsContainer>
  )
}

export const ActionsBottom = () => {
  return (
    <ActionsContainer>
      <ScrollTo target={'bottom'} />
      <ResetConversation />
    </ActionsContainer>
  )
}
