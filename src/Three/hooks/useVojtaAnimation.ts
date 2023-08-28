import { VojtaState } from '@/Three/store/types'
import { useAnimation } from '@/Three/hooks/useAnimation'

type Props = {
  animation: VojtaState
}

export const useVojtaAnimation = ({ animation }: Props) => {
  return useAnimation({
    path: 'animations/vojta/young_adult',
    animation,
  })
}
