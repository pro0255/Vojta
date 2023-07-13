import { WorkType } from '@/work/types'
import React, { FC } from 'react'
import Image from 'next/image'

type Props = {
  item: WorkType
}
export const Item: FC<Props> = ({ item }) => {
  const { title, tags, description, thumbnail } = item
  return (
    <li className="p-10 border border-indigo-600">
      <div className="flex flex-row">
        <Image
          src={`/work/${thumbnail}`}
          alt={thumbnail}
          width={60}
          height={60}
        />
        <div className="ml-10 flex flex-col">
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>

      <hr />

      <ul className="flex flex-row justify-around">
        {tags.map(tag => {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
    </li>
  )
}
