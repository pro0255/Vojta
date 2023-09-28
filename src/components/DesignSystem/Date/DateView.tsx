import { date } from '@/helpers'
import { GrayText } from '@/components/DesignSystem'

type Props = {
  date: Date | number
}

export const DateView = (props: Props) => {
  return <GrayText id={'date'}>{date.format(props.date)}</GrayText>
}
