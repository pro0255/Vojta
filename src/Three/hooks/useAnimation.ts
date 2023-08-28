import { useFBX } from '@react-three/drei'
import { GuessState, VojtaState } from '@/Three/store/types'

type Props = {
  animation: GuessState | VojtaState
  path: string
}

export const useAnimation = ({ animation, path }: Props) => {
  const { animations } = useFBX(`${path}/${animation}.fbx`)

  animations[0].name = animation

  return animations[0]
}
