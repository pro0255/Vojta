import { useChatStore } from '@/components/Chat/store/chat'
import { useCallback } from 'react'
import { createGuessMessage } from '@/components/Chat/utils/createMessage'

type Props = {
  question: string
}

export const useStartingMessage = ({ question }: Props) => {
  const { ask } = useChatStore(chatStore => ({ ask: chatStore.add }))

  return useCallback(() => {
    ask(createGuessMessage(question))
  }, [ask, question])
}
