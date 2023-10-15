import { useCallback } from 'react'
import { createGuessMessage } from '@/app/chat/utils/createMessage'
import { useChatStore } from '@/app/chat/chatStore'

type Props = {
  question: string
}

export const useStartingMessage = ({ question }: Props) => {
  const { ask } = useChatStore(chatStore => ({ ask: chatStore.add }))

  return useCallback(() => {
    ask(createGuessMessage(question))
  }, [ask, question])
}
