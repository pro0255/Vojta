import { DateView } from '@/components/DesignSystem/Date/DateView'

type Props = {
  start: Date | number
  end?: Date | number
}

export const DateRangeView = ({ end, start }: Props) => {
  return (
    <span className="text-lg text-red-500">
      <DateView date={start} />
      {end ? (
        <>
          {' '}
          - <DateView date={end} />{' '}
        </>
      ) : null}
    </span>
  )
}
