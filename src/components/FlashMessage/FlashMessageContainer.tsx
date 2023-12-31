'use client'

import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'
import { FlashMessageView } from '@/components/FlashMessage/FlashMessageView'
import { AnimatePresence, motion } from 'framer-motion'

export const FlashMessageContainer = () => {
  const {
    flashMessages,
    manualRemove,
    remove,
    hoverMessage,
    hoveredMessage,
    removeFromManualRemove,
  } = useFlashMessages(store => ({
    flashMessages: store.messages,
    remove: store.remove,
    manualRemove: store.manualRemove,
    hoverMessage: store.setHoveredMessage,
    hoveredMessage: store.hoveredMessage,
    removeFromManualRemove: store.removeFromManualRemove,
  }))

  return (
    <div
      className={
        'fixed top-[5%] left-0 md:left-[5%] w-[100vw] md:w-auto  z-50 max-w-[100vw] '
      }
    >
      <ul className={'w-full flex flex-col items-center justify-center'}>
        {flashMessages.map(flashMessage => {
          const startTrigger =
            manualRemove.includes(flashMessage.id) &&
            hoveredMessage !== flashMessage.id

          return (
            <AnimatePresence key={flashMessage.id}>
              {flashMessage.visible && (
                <motion.li
                  className={'mb-2'}
                  initial={{ opacity: 0, transform: 'translateY(50%)' }}
                  animate={{ opacity: 1, transform: 'translateY(0%)' }}
                  exit={{ opacity: 0, transform: 'translateY(-50%)' }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <FlashMessageView
                    {...flashMessage}
                    onCloseClick={remove}
                    onHover={hoverMessage}
                    removeTrigger={startTrigger}
                    removeFromManualRemove={removeFromManualRemove}
                  />
                </motion.li>
              )}
            </AnimatePresence>
          )
        })}
      </ul>
    </div>
  )
}
