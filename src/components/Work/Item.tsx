import { Card, CardFooter, CardMain } from '@/components/DesignSystem'
import { WorkType } from '@/work/types'
import Image from 'next/image'
import { FC } from 'react'
import { CardHeader } from '@/components/DesignSystem/Card/CardHeader'
import { DateRangeView } from '@/components/DesignSystem/Date/DateRangeView'
import { WorkTypeBadge } from '@/components/Work/WorkTypeBadge'

type Props = {
  item: WorkType
}
export const Item: FC<Props> = ({ item }) => {
  const { title, tags, description, thumbnail, link, start, end, name } = item

  return (
    <a href={link} target={'_blank'}>
      <li className="w-full mt-2">
        <Card
          headerSlot={
            <CardHeader
              Right={
                <>
                  <DateRangeView start={start} end={end} />{' '}
                  <WorkTypeBadge type={name} />
                </>
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
