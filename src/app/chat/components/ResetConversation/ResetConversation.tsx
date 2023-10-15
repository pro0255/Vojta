import { ClickableSmallText } from '@/components/DesignSystem/Text/ClickableSmallText'
import { useResetConversation } from '@/app/chat/components/ResetConversation/useResetConversation'
import { useChatStore } from '@/app/chat/chatStore'

export const ResetConversation = () => {
  const reset = useResetConversation()
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areMessagesEmpty = messages.length === 0

  if (areMessagesEmpty) {
    return null
  }

  return (
    <ClickableSmallText onClick={reset}>Reset conversation</ClickableSmallText>
  )
}
