import { WorkType } from '@/work/types'
import { FC } from 'react'
import { Item } from '@/components/Work/Item'

type Props = {
  work: Array<WorkType>
}
export const List: FC<Props> = ({ work }) => {
  return (
    <ul className="w-full max-w-full">
      {work.map(work => (
        <Item item={work} key={work.title} />
      ))}
    </ul>
  )
}
