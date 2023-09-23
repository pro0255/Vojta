import { BlueTextButton } from '@/components/DesignSystem/Actions/BlueTextButton'
import { useResetConversation } from '@/components/Chat/components/Actions/ResetConversation/useResetConversation'
import { useChatStore } from '@/components/Chat/store/chat'

export const ResetConversation = () => {
  const reset = useResetConversation()
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areMessagesEmpty = messages.length === 0

  if (areMessagesEmpty) {
    return null
  }

  return <BlueTextButton onClick={reset}>Reset conversation</BlueTextButton>
}
