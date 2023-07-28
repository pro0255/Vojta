import { PostType } from '@/blog/types'
import { FC } from 'react'
import { Card, CardFooter, CardMain } from '@/components/DesignSystem'

type Props = {
  post: PostType
}
export const Post: FC<Props> = ({ post }) => {
  const { tags, linkToNotion, description, name, date } = post
  return (
    <a href={linkToNotion} target={'_blank'}>
      <li className="w-full">
        <Card
          footerSlot={<CardFooter tags={tags} timestamp={date} />}
          mainSlot={<CardMain title={name} description={description} />}
        />
      </li>
    </a>
  )
}
