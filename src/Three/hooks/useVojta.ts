import { useRef } from 'react'
import { useVojtaAnimations } from '@/Three/hooks/useVojtaAnimations'
import { useModelManager } from '@/Three/store/useModelManager'
import { useModelLookAt } from '@/Three/hooks/useModelLookAt'
import { VojtaState } from '@/Three/store/types'

export const useVojta = () => {
  const groupRef = useRef(null)
  const vojtaState = useModelManager(manager => manager.vojtaState)

  useVojtaAnimations(groupRef)
  useModelLookAt({
    modelRef: groupRef,
    isMouseVector: vojtaState === VojtaState.Init,
    isCameraVector: vojtaState !== VojtaState.Init,
  })

  return {
    groupRef,
  }
}
