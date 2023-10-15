import { VojtaState } from '@/3d/store/types'
import { useAnimation } from '@/3d/hooks/useAnimation'

type Props = {
  animation: VojtaState
}

export const useGuessAnimation = ({ animation }: Props) => {
  return useAnimation({
    path: 'animations/guess/man',
    animation,
  })
}
