import { PostTag, PostType } from '@/blog/types'

export const prvni: PostType = {
  date: new Date(),
  linkToNotion: 'asd',
  name: 'This is prvni post',
  tags: [PostTag.Prvni],
  description: 'Lol',
}
