import { GrayText } from '@/components/DesignSystem'
import { BoldText } from '@/components/DesignSystem/Text/BoldText'
import { useStartingMessage } from '@/components/Chat/components/StartingConversations/useStartingMessage'

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
        'flex flex-col items-start justify-around p-4 bg-white border-solid border-2 border-slate-100 rounded-xl hover:animate-scale hover:border-blue-500'
      }
    >
      <BoldText>{title}</BoldText>
      <GrayText>{description}</GrayText>
    </div>
  )
}
