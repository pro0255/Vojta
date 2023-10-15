import { useRef } from 'react'
import { useVojtaAnimations } from '@/3d/hooks/useVojtaAnimations'
import { useModelManager } from '@/3d/store/useModelManager'
import { useModelLookAt } from '@/3d/hooks/useModelLookAt'
import { VojtaState } from '@/3d/store/types'

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
