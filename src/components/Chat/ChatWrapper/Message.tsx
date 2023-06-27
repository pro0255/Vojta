import { FC } from 'react'
import { Author } from '@/components/Chat/types'

type Props = {
  timestamp: number
  author: Author
  text: string
}

export const Message: FC<Props> = ({ text, author, timestamp }) => {
  return (
    <div>
      <header>
        <div>
          {author}
          {timestamp}
        </div>
      </header>
      <main>{text}</main>
    </div>
  )
}
