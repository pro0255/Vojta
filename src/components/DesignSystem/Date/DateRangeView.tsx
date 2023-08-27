import { DateView } from '@/components/DesignSystem/Date/DateView'
import { GrayText } from '@/components/DesignSystem'

type Props = {
  start: Date | number
  end?: Date | number
}

export const DateRangeView = ({ end, start }: Props) => {
  return (
    <GrayText>
      <>
        <DateView date={start} />
        {end ? (
          <>
            {' '}
            - <DateView date={end} />{' '}
          </>
        ) : null}
      </>
    </GrayText>
  )
}
