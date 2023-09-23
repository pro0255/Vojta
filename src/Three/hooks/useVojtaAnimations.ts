import { useVojtaAnimation } from '@/Three/hooks/useVojtaAnimation'
import { useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'

export const useVojtaAnimations = (ref: any) => {
  const { setState, state } = useModelManager(manager => ({
    state: manager.vojtaState,
    setState: manager.setVojtaState,
  }))
  const previousState = useRef<VojtaState | null>(null)

  const talkingAnimation = useVojtaAnimation({ animation: VojtaState.Talking })
  const initAnimation = useVojtaAnimation({ animation: VojtaState.Init })
  const thinkingAnimation = useVojtaAnimation({
    animation: VojtaState.Thinking,
  })
  const wavingAnimation = useVojtaAnimation({
    animation: VojtaState.Waving,
  })
  const listeningAnimation = useVojtaAnimation({
    animation: VojtaState.Listening,
  })

  const { actions } = useAnimations(
    [
      talkingAnimation,
      initAnimation,
      thinkingAnimation,
      wavingAnimation,
      listeningAnimation,
    ],
    ref
  )

  useEffect(() => {
    setState(VojtaState.Waving)

    setTimeout(() => {
      setState(VojtaState.Init)
    }, 5000)
  }, [])

  useEffect(() => {
    if (previousState.current !== state && actions) {
      if (previousState.current !== null) {
        actions[previousState.current]?.fadeOut(3)
      }

      actions[state]?.reset().fadeIn(2).play()
      previousState.current = state
    }
  }, [actions, state])

  // useEffect(() => {
  //   if (actions !== null) {
  //     actions[state]?.reset().fadeIn(2).play()
  //   }
  //   return () => {
  //     actions[state]?.reset().fadeOut(3)
  //   }
  // }, [state])
}
