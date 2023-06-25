import { WorkType } from '@/work/types'
import { FC } from 'react'

type Props = {
  item: WorkType
}
export const Item: FC<Props> = ({ item }) => {
  const { title } = item
  return (
    <li>
      {title}
      Link to notion for individual parts
    </li>
  )
}
