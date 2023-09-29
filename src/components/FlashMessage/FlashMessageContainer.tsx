'use client'

import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'
import { FlashMessageView } from '@/components/FlashMessage/FlashMessageView'

export const FlashMessageContainer = () => {
  const flashMessages = useFlashMessages(
    flashMessages => flashMessages.messages
  )

  return (
    <div>
      <ul>
        {flashMessages.map(flashMessage => {
          return (
            <li key={flashMessage.id}>
              <FlashMessageView {...flashMessage} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
