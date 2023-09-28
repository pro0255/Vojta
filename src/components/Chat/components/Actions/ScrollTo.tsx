import { scroll } from '@/helpers'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
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
