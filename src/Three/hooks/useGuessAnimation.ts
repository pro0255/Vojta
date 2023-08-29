import { VojtaState } from '@/Three/store/types'
import { useAnimation } from '@/Three/hooks/useAnimation'

type Props = {
  animation: VojtaState
}

export const useGuessAnimation = ({ animation }: Props) => {
  return useAnimation({
    path: 'animations/guess/man',
    animation,
  })
}
