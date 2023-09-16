import { useAnimations } from '@react-three/drei'
import { GuessState, VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'
import { useGuessAnimation } from '@/Three/hooks/useGuessAnimation'
import { useEffect, useRef } from 'react'

export const useGuessAnimations = (ref: any) => {
  const { state } = useModelManager(manager => ({
    state: manager.guessState,
  }))

  const previousState = useRef<GuessState | null>(null)

  const talkingAnimation = useGuessAnimation({ animation: VojtaState.Talking })
  const initAnimation = useGuessAnimation({ animation: VojtaState.Init })

  const { actions } = useAnimations([talkingAnimation, initAnimation], ref)

  useEffect(() => {
    if (previousState.current !== state && actions) {
      if (previousState.current !== null) {
        actions[previousState.current]?.fadeOut(3)
      }

      actions[state]?.reset().play()
      previousState.current = state
    }
  }, [actions, state])
}
