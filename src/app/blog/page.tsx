import { List } from '@/components/Blog/List'
import { posts } from '@/blog'

const Blog = () => {
  return (
    <main>
      <List posts={posts} />
    </main>
  )
}

export default Blog
