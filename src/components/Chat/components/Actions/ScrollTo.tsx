import { NormalText } from '@/components/DesignSystem'

type Props = {
  target: 'top' | 'bottom'
}

export const ScrollTo = ({ target }: Props) => {
  return <NormalText>Scroll {target}</NormalText>
}
