import { List } from '@/app/blog/components/List'
import { posts } from '@/app/blog/posts'

const Blog = () => {
  return (
    <main className={'w-full'}>
      <List posts={posts} />
    </main>
  )
}

export default Blog
