import { BoldText } from '@/components/DesignSystem/Text/BoldText'
import { useStartingMessage } from '@/app/chat/components/StartingConversations/useStartingMessage'
import { GrayText } from '@/components/DesignSystem/Text/GrayText'

type Props = {
  title: string
  description: string
}

export const StartingMessage = ({ description, title }: Props) => {
  const startConversation = useStartingMessage({ question: description })

  return (
    <div
      onClick={startConversation}
      className={
        'transition duration-200 hover:scale-125 focus:scale-125 ease-in-out flex flex-col items-start justify-around p-4 bg-white normal rounded-xl hover:border-black'
      }
    >
      <BoldText>{title}</BoldText>
      <GrayText>{description}</GrayText>
    </div>
  )
}
