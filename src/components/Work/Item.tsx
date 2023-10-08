'use client'

import { Card, CardFooter, CardMain } from '@/components/DesignSystem'
import { WorkType } from '@/work/types'
import Image from 'next/image'
import { FC } from 'react'
import { CardHeader } from '@/components/DesignSystem/Card/CardHeader'
import { DateRangeView } from '@/components/DesignSystem/Date/DateRangeView'
import { WorkTypeBadge } from '@/components/Work/WorkTypeBadge'
import { CopyButton } from '@/components/Chat/components/CopyButton'

type Props = {
  item: WorkType
}
export const Item: FC<Props> = ({ item }) => {
  const { title, tags, description, thumbnail, link, start, end, name } = item

  return (
    <a className={'w-full'} href={link} target={'_blank'}>
      <li className="w-full mt-2">
        <Card
          headerSlot={
            <CardHeader
              Right={
                <div className={'flex flex-row items-center justify-center'}>
                  <span className={'mr-2'}>
                    <CopyButton text={link} />
                  </span>
                  <DateRangeView start={start} end={end} />{' '}
                  <WorkTypeBadge type={name} />
                </div>
              }
            />
          }
          footerSlot={tags.length ? <CardFooter tags={tags} /> : null}
          mainSlot={
            <CardMain
              title={title}
              description={description}
              image={
                <Image
                  src={`/work/${thumbnail}`}
                  alt={thumbnail}
                  width={60}
                  height={60}
                />
              }
            />
          }
        />
      </li>
    </a>
  )
}
