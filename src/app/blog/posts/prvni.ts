import { PostType } from '@/app/blog/types'
import { date } from '@/helpers'

export const prvni: PostType = {
  date: date.now(),
  name: 'Do you have portfolio? …why?',
  tags: [],
  description:
    'Is creating a portfolio worthwhile? What motivated me to embark on this portfolio-building journey? Which technologies have I employed for this endeavor, and what valuable insights have I gained along the way?',
  disabled: true,
}
