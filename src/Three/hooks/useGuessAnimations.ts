import { useAnimations } from '@react-three/drei'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'
import { useGuessAnimation } from '@/Three/hooks/useGuessAnimation'
import { useEffect } from 'react'

export const useGuessAnimations = (ref: any) => {
  const { state } = useModelManager(manager => ({
    state: manager.guessState,
  }))

  const talkingAnimation = useGuessAnimation({ animation: VojtaState.Talking })
  const initAnimation = useGuessAnimation({ animation: VojtaState.Init })

  const { actions } = useAnimations([talkingAnimation, initAnimation], ref)

  useEffect(() => {
    if (actions !== null) {
      actions[state]?.reset().fadeIn(2).play()
    }
    return () => {
      actions[state]?.reset().fadeOut(3)
    }
  }, [state])
}
