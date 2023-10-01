import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Author } from '@/components/Chat/types'
import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { scroll } from '@/helpers'
import { CopyButton } from '@/components/Chat/components/CopyButton'
import { BlueTextButton } from '@/components/DesignSystem/Actions/BlueTextButton'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  timestamp: number | Date
  author: Author
  text: string
  atStart?: () => void
  atEnd?: () => void
  isSlowMessage: boolean
  isRenderedImmediately?: boolean
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

export const SlowMessage: FC<Props> = ({
  text,
  author,
  timestamp,
  atEnd,
  atStart,
  isSlowMessage,
}) => {
  const isRendered = useRef<boolean>(!isSlowMessage)
  const [renderedText, setRenderedText] = useState(isSlowMessage ? '' : text)

  const renderNow = () => {
    setRenderedText(text)
    scroll.scrollToBottom()
    isRendered.current = true
    atEnd?.()
  }

  useEffect(() => {
    if (isSlowMessage) {
      scroll.scrollToBottom()

      atStart?.()
      const firstChar = text[0]
      setRenderedText(firstChar)

      const renderRest = async () => {
        const generator = createGenerator(text, setRenderedText)
        for (const renderChar of generator) {
          await new Promise(resolve => setTimeout(resolve, 50))
          if (!isRendered.current) {
            renderChar()
            scroll.scrollToBottom()
          }
        }
        isRendered.current = true
        atEnd?.()
      }

      renderRest()
    }
  }, [text])

  const isFooterContent = isSlowMessage && !isRendered.current

  return (
    <>
      <MessageView
        timestamp={timestamp}
        author={author}
        content={renderedText}
        header={<CopyButton text={text} />}
        footer={
          isSlowMessage ? (
            <AnimatePresence>
              {renderedText !== text && (
                <motion.div
                  animate={{
                    opacity: isFooterContent ? 1 : 0,
                  }}
                  transition={{ ease: 'anticipate', duration: 1 }}
                  className={
                    'mt-5 w-full flex flex-row items-center justify-center'
                  }
                >
                  <BlueTextButton onClick={renderNow}>
                    Render immediately
                  </BlueTextButton>
                </motion.div>
              )}
            </AnimatePresence>
          ) : null
        }
      />
    </>
  )
}
