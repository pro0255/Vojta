import { useCallback, useEffect, useRef } from 'react'
import { useModelLookAt } from '@/Three/hooks/useModelLookAt'
import { useAnimations } from '@react-three/drei'
import { useAnimation } from '@/Three/hooks/useAnimation'

export type CarouselAnimation = 'Guitar' | 'Kneeling' | 'Robot' | 'Sitting'

export const useAvatarCarousel = (
  isSlideLoaded: boolean,
  desiredAnimation: CarouselAnimation
) => {
  const groupRef = useRef(null)

  useModelLookAt({
    modelRef: groupRef,
    isMouseVector: isSlideLoaded,
    isCameraVector: !isSlideLoaded,
  })

  const animation = useAnimation({
    path: 'animations/mix',
    animation: desiredAnimation,
  })
  const { actions } = useAnimations([animation], groupRef)

  const playAnimation = useCallback(() => {
    console.log('play animation', Object.keys(actions))
    actions[desiredAnimation]?.play()
  }, [actions, desiredAnimation])

  useEffect(() => {
    playAnimation()
  }, [playAnimation])

  return {
    groupRef,
  }
}
