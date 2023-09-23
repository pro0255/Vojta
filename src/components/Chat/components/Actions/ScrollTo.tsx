import { BlueTextButton } from '@/components/DesignSystem/Actions/BlueTextButton'
import { scroll } from '@/helpers'
import { useIsScrollbar } from '@/hooks/useIsScrollbar'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
  const isScrollBar = useIsScrollbar()

  if (!isScrollBar) {
    return null
  }

  return (
    <BlueTextButton
      onClick={target === 'bottom' ? scroll.scrollToBottom : scroll.scrollToTop}
    >
      Scroll {target}
    </BlueTextButton>
  )
}
