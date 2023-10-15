import { useVojtaAnimation } from '@/3d/hooks/useVojtaAnimation'
import { useAnimations } from '@react-three/drei'
import { useCallback, useEffect, useRef } from 'react'
import { VojtaState } from '@/3d/store/types'
import { useModelManager } from '@/3d/store/useModelManager'

export const useVojtaAnimations = (ref: any) => {
  const { setState, state, hasVojtaWaved, setVojtaWaved } = useModelManager(
    manager => ({
      state: manager.vojtaState,
      setState: manager.setVojtaState,
      hasVojtaWaved: manager.hasVojtaWaved,
      setVojtaWaved: manager.setVojtaWaved,
    })
  )
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
    if (hasVojtaWaved) {
      setState(VojtaState.Init)
    } else {
      setState(VojtaState.Waving)
      setVojtaWaved(true)
      setTimeout(() => {
        setState(VojtaState.Init)
      }, 5000)
    }

    /* eslint-disable-next-line */
  }, [])

  const playAnimation = useCallback(() => {
    if (previousState.current !== state && actions) {
      if (previousState.current !== null) {
        actions[previousState.current]?.fadeOut(3)
      }

      actions[state]?.reset().play()
      previousState.current = state
    }
  }, [actions, state])

  useEffect(() => {
    playAnimation()
  }, [actions, playAnimation, state])
}
