import { FC, ReactNode } from 'react'

export type EmojiItem = {
  text: ReactNode
  emoji: string
}

type Props = {
  items: Array<EmojiItem>
}

export const EmojiList: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(({ text, emoji }, index) => {
        return (
          <li className="p-2" key={index}>
            <span className="mr-2">{emoji}</span>
            <span>{text}</span>
          </li>
        )
      })}
    </ul>
  )
}
