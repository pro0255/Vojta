import { PostType } from '@/blog/types'
import { FC } from 'react'
import { Post } from '@/components/Blog/Post'

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
