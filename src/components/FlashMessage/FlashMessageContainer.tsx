'use client'

import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'
import { FlashMessageView } from '@/components/FlashMessage/FlashMessageView'
import { AnimatePresence, motion } from 'framer-motion'

export const FlashMessageContainer = () => {
  const flashMessages = useFlashMessages(
    flashMessages => flashMessages.messages
  )

  return (
    <div className={'fixed bottom-[5%] left-[5%] z-50'}>
      <ul>
        {flashMessages.map(flashMessage => {
          return (
            <AnimatePresence key={flashMessage.id}>
              <motion.li
                className={'mb-2'}
                initial={{ opacity: 0, transform: 'translateY(50%)' }}
                animate={{ opacity: 1, transform: 'translateY(0%)' }}
                exit={{ opacity: 0, transform: 'translateY(-50%)' }}
                transition={{
                  duration: 0.6,
                }}
              >
                <FlashMessageView {...flashMessage} />
              </motion.li>
            </AnimatePresence>
          )
        })}
      </ul>
    </div>
  )
}
