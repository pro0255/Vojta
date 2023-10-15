import { PostType } from '@/app/blog/types'
import { FC } from 'react'
import { Post } from '@/app/blog/components/Post'

type Props = {
  posts: Array<PostType>
}

export const List: FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <Post post={post} key={post.name} />
      ))}
    </ul>
  )
}
