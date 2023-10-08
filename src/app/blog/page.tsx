import { List } from '@/components/Blog/List'
import { posts } from '@/blog'

const Blog = () => {
  return (
    <main className={'w-full'}>
      <List posts={posts} />
    </main>
  )
}

export default Blog
