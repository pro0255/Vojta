import { scroll } from '@/helpers'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
  const { isScrollbar, canScrollBottom, canScrollTop } = useIsScrollbar()

  if (!isScrollbar) {
    return null
  }

  if (target === 'top') {
    return (
      <CircleContainer
        isDisabled={!canScrollTop}
        onClick={canScrollTop ? scroll.scrollToTop : undefined}
      >
        <AiOutlineArrowUp />
      </CircleContainer>
    )
  }

  if (target === 'bottom') {
    return (
      <CircleContainer
        isDisabled={!canScrollBottom}
        onClick={canScrollBottom ? scroll.scrollToBottom : undefined}
      >
        <AiOutlineArrowDown />
      </CircleContainer>
    )
  }
}
