import { PostTag, PostType } from '@/blog/types'
import { date } from '@/helpers'

export const prvni: PostType = {
  date: date.now(),
  linkToNotion: 'asd',
  name: 'This is prvni post',
  tags: [PostTag.Prvni],
  description: 'Lol',
}
