import { WorkType } from '@/app/work/types'
import { FC } from 'react'
import { Item } from '@/app/work/components/Item'

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
