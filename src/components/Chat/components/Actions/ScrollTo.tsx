import { scroll } from '@/helpers'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
  const isScrollBar = useIsScrollbar()

  if (!isScrollBar) {
    return null
  }

  if (target === 'top') {
    return (
      <CircleContainer onClick={scroll.scrollToTop}>
        <AiOutlineArrowUp />
      </CircleContainer>
    )
  }

  if (target === 'bottom') {
    return (
      <CircleContainer onClick={scroll.scrollToBottom}>
        <AiOutlineArrowDown />
      </CircleContainer>
    )
  }
}
