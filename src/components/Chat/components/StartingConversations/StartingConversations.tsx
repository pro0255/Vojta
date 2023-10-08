import { useChatStore } from '@/components/Chat/store/chat'
import { WhoAreYou } from '@/components/Chat/components/StartingConversations/components/WhoAreYou'
import { Hobbies } from '@/components/Chat/components/StartingConversations/components/Hobbies'
import { AreYouLookingForAJob } from '@/components/Chat/components/StartingConversations/components/AreYouLookingForAJob'
import { Projects } from '@/components/Chat/components/StartingConversations/components/Projects'
import { Experiences } from '@/components/Chat/components/StartingConversations/components/Experiences'
import { Future } from '@/components/Chat/components/StartingConversations/components/Future'

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
