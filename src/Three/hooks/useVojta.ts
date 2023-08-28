import { useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { VojtaState } from '@/Three/store/types'
import { useVojtaAnimation } from '@/Three/hooks/useVojtaAnimation'

export const useVojta = () => {
  const groupRef = useRef(null)
  const animation = useVojtaAnimation({ animation: VojtaState.Talking })
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
