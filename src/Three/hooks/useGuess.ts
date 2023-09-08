import { useRef } from 'react'
import { useGuessAnimations } from '@/Three/hooks/useGuessAnimations'
import { useModelManager } from '@/Three/store/useModelManager'
import { GuessState } from '@/Three/store/types'
import { useModelLookAt } from '@/Three/hooks/useModelLookAt'

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
