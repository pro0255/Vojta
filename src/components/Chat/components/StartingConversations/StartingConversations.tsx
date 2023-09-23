import { useChatStore } from '@/components/Chat/store/chat'

export const StartingConversations = () => {
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areEmptyMessages = messages.length === 0

  if (!areEmptyMessages) {
    return null
  }
}
