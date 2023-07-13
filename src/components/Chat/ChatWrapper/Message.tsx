import { FC } from 'react'
import { Author } from '@/components/Chat/types'

type Props = {
  timestamp: number
  author: Author
  text: string
}

export const Message: FC<Props> = ({ text, author, timestamp }) => {
  const mainStyle = `flex flex-row ${
    author === Author.Guess ? 'justify-start' : 'justify-end'
  }`

  return (
    <div className="flex flex-col border-2 border-indigo-500 p-4 my-1">
      <header className="flex flex-row justify-between">
        <span id="author"></span>
        <span id="date">{timestamp}</span>
      </header>
      <main className={mainStyle}>{text}</main>
    </div>
  )
}
