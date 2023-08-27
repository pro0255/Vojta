import { FC } from 'react'
import { Tag } from '@/components/DesignSystem'

type CardFooterProps = {
  tags: Array<string>
}

export const CardFooter: FC<CardFooterProps> = ({ tags }) => {
  return (
    <div className="flex flex-row justify-between">
      <ul className="flex flex-row">
        {tags.map(tag => {
          return (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
