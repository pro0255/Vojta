import { date } from '@/helpers'

type Props = {
  date: Date | number
}

export const DateView = (props: Props) => {
  return <span className="text-lg text-red-500">{date.format(props.date)}</span>
}
