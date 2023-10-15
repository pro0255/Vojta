import { useFBX } from '@react-three/drei'
import { GuessState, VojtaState } from '@/3d/store/types'
import { CarouselAnimation } from '@/3d/hooks/usePickAvatarAnimation'

type Props = {
  animation: GuessState | VojtaState | CarouselAnimation
  path: string
}

export const useAnimation = ({ animation, path }: Props) => {
  const targetPath = `${path}/${animation}.fbx`
  const { animations } = useFBX(targetPath)

  animations[0].name = animation

  const currentAnimation = animations[0]
  return currentAnimation
}
