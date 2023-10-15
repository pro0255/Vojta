import { PostType } from '@/app/blog/types'
import { FC } from 'react'
import { Card, CardFooter, CardMain } from '@/components/DesignSystem/Card'

type Props = {
  post: PostType
}
export const Post: FC<Props> = ({ post }) => {
  const { linkToNotion, disabled } = post

  if (disabled) {
    return <PostContent post={post} />
  }

  return (
    <a href={linkToNotion} target={'_blank'}>
      <PostContent post={post} />
    </a>
  )
}

const PostContent = ({ post }: Props) => {
  const { tags, description, name, disabled } = post

  return (
    <li className="w-full mt-2">
      <Card
        isDisabled={disabled}
        footerSlot={tags.length ? <CardFooter tags={tags} /> : null}
        mainSlot={<CardMain title={name} description={description} />}
      />
    </li>
  )
}
