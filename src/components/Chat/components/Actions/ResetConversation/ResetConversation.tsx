import { BlueTextButton } from '@/components/DesignSystem/Actions/BlueTextButton'
import { useResetConversation } from '@/components/Chat/components/Actions/ResetConversation/useResetConversation'

export const ResetConversation = () => {
  const reset = useResetConversation()

  return <BlueTextButton onClick={reset}>Reset conversation</BlueTextButton>
}
