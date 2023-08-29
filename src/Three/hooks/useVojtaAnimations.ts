import { useVojtaAnimation } from '@/Three/hooks/useVojtaAnimation'
import { useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'

export const useVojtaAnimations = (ref: any) => {
  const { setState, state } = useModelManager(manager => ({
    state: manager.vojtaState,
    setState: manager.setVojtaState,
  }))

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
      console.log('now')
      setState(VojtaState.Init)
    }, 5000)
  }, [])

  useEffect(() => {
    if (actions !== null) {
      actions[state]?.reset().fadeIn(2).play()
    }
    return () => {
      actions[state]?.reset().fadeOut(3)
    }
  }, [state])
}
