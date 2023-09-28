import { FC, ReactNode } from 'react'
import { Author } from '@/components/Chat/types'
import { NormalText } from '@/components/DesignSystem'
import { MessageHeader } from '@/components/Chat/components/MessageHeader'

type Props = {
  timestamp?: number | Date
  author?: Author
  content: string | ReactNode
  header?: ReactNode
}

export const MessageView: FC<Props> = ({
  content,
  author,
  timestamp,
  header,
}) => {
  const mainStyle = `mt-6 flex flex-row ${
    author === Author.Guess ? 'justify-start' : 'justify-end'
  }`

  const containerStyle = `rounded flex flex-col border-2 border-b-slate-100 p-4 my-1 ${
    author === Author.Vojta ? 'bg-slate-50' : ''
  } `

  return (
    <div className={containerStyle}>
      <MessageHeader header={header} author={author} timestamp={timestamp} />
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
