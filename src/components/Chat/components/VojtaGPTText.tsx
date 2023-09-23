import { useChatStore } from '@/components/Chat/store/chat'

export const VojtaGPTText = () => {
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areMessagesEmpty = messages.length === 0

  if (!areMessagesEmpty) {
    return null
  }

  return (
    <div className="w-full text-4xl text-center font-black text-gray-500">
      VojtaGPT
    </div>
  )
}
