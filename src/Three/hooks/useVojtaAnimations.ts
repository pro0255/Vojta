import { useVojtaAnimation } from '@/Three/hooks/useVojtaAnimation'
import { useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { VojtaState } from '@/Three/store/types'
import { useModelManager } from '@/Three/store/useModelManager'

export const useVojtaAnimations = (ref: any) => {
  const vojtaState = useModelManager(manager => manager.vojtaState)

  const talkingAnimation = useVojtaAnimation({ animation: VojtaState.Talking })
  const initAnimation = useVojtaAnimation({ animation: VojtaState.Init })
  const thinkingAnimation = useVojtaAnimation({
    animation: VojtaState.Thinking,
  })

  const { actions } = useAnimations(
    [talkingAnimation, initAnimation, thinkingAnimation],
    ref
  )

  useEffect(() => {
    if (actions !== null) {
      actions[vojtaState]?.reset().play()
    }
    return () => {
      actions[vojtaState]?.fadeOut(2).stop()
    }
  }, [vojtaState])
}
