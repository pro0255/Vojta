import { WhoAreYou } from '@/app/chat/components/StartingConversations/components/WhoAreYou'
import { Hobbies } from '@/app/chat/components/StartingConversations/components/Hobbies'
import { AreYouLookingForAJob } from '@/app/chat/components/StartingConversations/components/AreYouLookingForAJob'
import { Projects } from '@/app/chat/components/StartingConversations/components/Projects'
import { Experiences } from '@/app/chat/components/StartingConversations/components/Experiences'
import { Future } from '@/app/chat/components/StartingConversations/components/Future'
import { useChatStore } from '@/app/chat/chatStore'

export const StartingConversations = () => {
  const { messages } = useChatStore(chatStore => ({
    messages: chatStore.messages,
  }))

  const areEmptyMessages = messages.length === 0

  if (!areEmptyMessages) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <WhoAreYou />
      <Hobbies />
      <AreYouLookingForAJob />
      <Projects />
      <Experiences />
      <Future />
    </div>
  )
}
