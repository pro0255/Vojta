import { useRef } from 'react'
import { useGuessAnimations } from '@/3d/hooks/useGuessAnimations'
import { useModelManager } from '@/3d/store/useModelManager'
import { GuessState } from '@/3d/store/types'
import { useModelLookAt } from '@/3d/hooks/useModelLookAt'

export const useGuess = () => {
  const groupRef = useRef(null)
  const guessState = useModelManager(model => model.guessState)
  useGuessAnimations(groupRef)

  useModelLookAt({
    modelRef: groupRef,
    isCameraVector: guessState !== GuessState.Init,
    isMouseVector: guessState === GuessState.Init,
  })

  return {
    groupRef,
  }
}
