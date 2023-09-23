import { useChatStore } from '@/components/Chat/store/chat'

export const useResetConversation = () => {
  const { reset } = useChatStore(chatStore => ({ reset: chatStore.reset }))

  return reset
}
