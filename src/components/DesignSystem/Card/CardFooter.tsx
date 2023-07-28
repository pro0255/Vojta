import { FC } from 'react'
import { Tag } from '@/components/DesignSystem'
import { date } from '@/helpers'

type CardFooterProps = {
  tags: Array<string>
  timestamp?: number
}

export const CardFooter: FC<CardFooterProps> = ({ timestamp, tags }) => {
  return (
    <div className="flex flex-row">
      <ul className="flex flex-row">
        {tags.map(tag => {
          return (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          )
        })}
      </ul>
      {timestamp && <div>{date.format(timestamp)}</div>}
    </div>
  )
}
