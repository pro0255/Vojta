import { useFBX } from '@react-three/drei'
import { GuessState, VojtaState } from '@/Three/store/types'
import { CarouselAnimation } from '@/Three/hooks/useAvatarCarousel'

type Props = {
  animation: GuessState | VojtaState | CarouselAnimation
  path: string
}

export const useAnimation = ({ animation, path }: Props) => {
  const { animations } = useFBX(`${path}/${animation}.fbx`)

  animations[0].name = animation

  const currentAnimation = animations[0]
  return currentAnimation
}
