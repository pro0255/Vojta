import { useAnimation } from '@/Three/hooks/useAnimation'
import { useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { VojtaState } from '@/Three/store/types'

export const useVojta = () => {
  const groupRef = useRef(null)

  const animation = useAnimation({
    path: 'animations/vojta/young_adult',
    animation: VojtaState.Talking,
  })

  const { actions } = useAnimations([animation], groupRef)

  useEffect(() => {
    if (actions !== null) {
      actions[VojtaState.Talking]?.reset().play()
    }
  }, [])

  return {
    groupRef,
  }
}
