import { FC, ReactNode } from 'react'
import { Author } from '@/components/Chat/types'
import { NormalText } from '@/components/DesignSystem'

type Props = {
  timestamp?: number
  author?: Author
  content: string | ReactNode
}

export const MessageView: FC<Props> = ({ content, author, timestamp }) => {
  const mainStyle = `flex flex-row ${
    author === Author.Guess ? 'justify-start' : 'justify-end'
  }`

  const containerStyle = `rounded flex flex-col border-2 border-b-slate-100 p-4 my-1 ${
    author === Author.Vojta ? 'bg-slate-50' : ''
  } `

  return (
    <div className={containerStyle}>
      <header className="flex flex-row justify-between">
        {author && <span id="author"></span>}
        {timestamp && <span id="date">{timestamp}</span>}
      </header>
      <main className={mainStyle}>
        {typeof content === 'string' ? (
          <NormalText>{content}</NormalText>
        ) : (
          content
        )}
      </main>
    </div>
  )
}
