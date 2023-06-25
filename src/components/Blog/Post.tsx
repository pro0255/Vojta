import { PostType } from '@/blog/types'
import { FC } from 'react'

type Props = {
  post: PostType
}
export const Post: FC<Props> = ({ post }) => {
  return <li>{post.name}</li>
}
