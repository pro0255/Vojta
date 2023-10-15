import { useChatStore } from '@/app/chat/chatStore'

export const useResetConversation = () => {
  const { reset } = useChatStore(chatStore => ({ reset: chatStore.reset }))

  return reset
}
