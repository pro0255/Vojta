import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MessageType } from '@/app/chat/types'
import { MessageView } from '@/app/chat/components/MessageView'
import { scroll } from '@/helpers'
import { CopyButton } from '@/app/chat/components/CopyButton'
import { ClickableSmallText } from '@/components/DesignSystem/Text/ClickableSmallText'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  message: MessageType
  atStart?: () => void
  atEnd?: () => void
  isSlowMessage: boolean
  isRenderedImmediately?: boolean
  setIsRendered: (message: MessageType) => void
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
  atEnd,
  atStart,
  isSlowMessage,
  setIsRendered,
  message,
}) => {
  const isRendered = useRef<boolean>(!isSlowMessage)
  const [renderedText, setRenderedText] = useState(
    isSlowMessage ? '' : message.text
  )

  useEffect(() => {
    if (!isSlowMessage) {
      setIsRendered(message)
    }
  }, [isSlowMessage])

  const renderNow = () => {
    setRenderedText(message.text)
    scroll.scrollToBottom()
    isRendered.current = true
    atEnd?.()
  }

  useEffect(() => {
    if (isSlowMessage) {
      scroll.scrollToBottom()

      atStart?.()
      const firstChar = message.text[0]
      setRenderedText(firstChar)

      const renderRest = async () => {
        const generator = createGenerator(message.text, setRenderedText)
        for (const renderChar of generator) {
          await new Promise(resolve => setTimeout(resolve, 50))
          if (!isRendered.current) {
            renderChar()
            scroll.scrollToBottom()
          }
        }
        isRendered.current = true
        atEnd?.()
        setIsRendered(message)
      }

      renderRest()
    }
  }, [message.text])

  const isFooterContent = isSlowMessage && !isRendered.current

  return (
    <>
      <MessageView
        timestamp={message.timestamp}
        author={message.author}
        content={renderedText}
        header={<CopyButton text={message.text} />}
        footer={
          isSlowMessage ? (
            <AnimatePresence>
              {renderedText !== message.text && (
                <motion.div
                  animate={{
                    opacity: isFooterContent ? 1 : 0,
                  }}
                  transition={{ ease: 'anticipate', duration: 1 }}
                  className={
                    'mt-5 w-full flex flex-row items-center justify-center'
                  }
                >
                  <ClickableSmallText onClick={renderNow}>
                    Render immediately
                  </ClickableSmallText>
                </motion.div>
              )}
            </AnimatePresence>
          ) : null
        }
      />
    </>
  )
}
