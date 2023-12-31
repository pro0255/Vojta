import { Avatar } from '@/components/DesignSystem/Avatar'
import { DateView } from '@/components/DesignSystem/Date/DateView'
import { Author } from '@/app/chat/types'
import { ReactNode, useState } from 'react'

type Props = {
  timestamp?: number | Date
  author?: Author
  header?: ReactNode
}

export const MessageHeader = ({ timestamp, header, author }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-row justify-between"
    >
      {author && <Avatar author={author} />}
      <div className={'mx-3 flex flex-row justify-around items-center'}>
        {header && isHovered && <span className={'mx-3'}>{header}</span>}
        {timestamp && <DateView date={timestamp} />}
      </div>
    </header>
  )
}
