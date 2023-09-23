import { BlueTextButton } from '@/components/DesignSystem/Actions/BlueTextButton'
import { scroll } from '@/helpers'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
  return (
    <BlueTextButton
      onClick={target === 'bottom' ? scroll.scrollToBottom : scroll.scrollToTop}
    >
      Scroll {target}
    </BlueTextButton>
  )
}
