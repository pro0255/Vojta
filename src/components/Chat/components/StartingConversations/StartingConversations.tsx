import { useChatStore } from '@/components/Chat/store/chat'
import { StartingMessage } from '@/components/Chat/components/StartingConversations/StartingMessage'

export const StartingConversations = () => {
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areEmptyMessages = messages.length === 0

  if (!areEmptyMessages) {
    return null
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
      <StartingMessage
        title={'Lol'}
        description={'this is description asdafsf'}
      />
    </div>
  )
}
