import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Author } from '@/components/Chat/types'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'

type Props = {
  timestamp: number
  author: Author
  text: string
  setAsRendered: () => void
}

const createGenerator = function* (
  text: string,
  setText: Dispatch<SetStateAction<string>>
) {
  //First character is already rendered
  const sizeOfText = text.length - 2

  for (let i = 0; i < sizeOfText; i++) {
    yield () => setText(text.substring(0, 2 + i))
  }
}

export const RenderingMessage: FC<Props> = ({
  text,
  author,
  timestamp,
  setAsRendered,
}) => {
  const [renderedText, setRenderedText] = useState('')

  useEffect(() => {
    const firstChar = text[0]
    setRenderedText(firstChar)

    const renderRest = async () => {
      const generator = createGenerator(text, setRenderedText)
      for (const renderChar of generator) {
        await new Promise(resolve => setTimeout(resolve, 10))
        renderChar()
      }
      setAsRendered()
    }

    renderRest()
  }, [text])

  return (
    <MessageView timestamp={timestamp} author={author} text={renderedText} />
  )
}
