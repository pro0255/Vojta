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

  const { actions } = useAnimations(
    [talkingAnimation, initAnimation, thinkingAnimation, wavingAnimation],
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
      actions[state]?.reset().fadeIn(0.5).play()
    }
    return () => {
      actions[state]?.reset().fadeOut(1)
    }
  }, [state])
}
