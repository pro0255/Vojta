import { FC } from 'react'
import { Author } from '@/components/Chat/types'
import { NormalText } from '@/components/DesignSystem'

type Props = {
  timestamp: number
  author: Author
  text: string
}

export const MessageView: FC<Props> = ({ text, author, timestamp }) => {
  const mainStyle = `flex flex-row ${
    author === Author.Guess ? 'justify-start' : 'justify-end'
  }`

  const containerStyle = `rounded flex flex-col border-2 border-b-slate-100 p-4 my-1 ${
    author === Author.Vojta ? 'bg-slate-50' : ''
  } `

  return (
    <div className={containerStyle}>
      <header className="flex flex-row justify-between">
        <span id="author"></span>
        <span id="date">{timestamp}</span>
      </header>
      <main className={mainStyle}>
        <NormalText>{text}</NormalText>
      </main>
    </div>
  )
}
