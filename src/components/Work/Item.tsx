import { WorkType } from '@/work/types'
import React, { FC } from 'react'
import Image from 'next/image'
import { Card, GrayText, HeaderOne, Tag } from '@/components/DesignSystem'

type Props = {
  item: WorkType
}
export const Item: FC<Props> = ({ item }) => {
  const { title, tags, description, thumbnail, link } = item

  return (
    <a href={'https://www.seznam.cz/'} target={'_blank'}>
      <li className="w-full">
        <Card
          footerSlot={
            <ul className="flex flex-row">
              {tags.map(tag => {
                return (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                )
              })}
            </ul>
          }
          mainSlot={
            <div className="flex flex-row">
              <Image
                src={`/work/${thumbnail}`}
                alt={thumbnail}
                width={60}
                height={60}
              />
              <div className="ml-10 flex flex-col">
                <div>
                  <HeaderOne>{title}</HeaderOne>
                </div>
                <div>
                  <GrayText>{description}</GrayText>
                </div>
              </div>
            </div>
          }
        />
      </li>
    </a>
  )
}
