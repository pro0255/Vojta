import { useCallback, useEffect } from 'react'
import { useModelLookAt } from '@/Three/hooks/useModelLookAt'
import { useAnimations } from '@react-three/drei'
import {
  CarouselAnimation,
  usePickAvatarAnimations,
} from '@/Three/hooks/usePickAvatarAnimation'

export const useAvatarCarousel = (
  isSlideLoaded: boolean,
  desiredAnimation: CarouselAnimation,
  ref: any
) => {
  useModelLookAt({
    modelRef: ref,
    isMouseVector: isSlideLoaded,
    isCameraVector: !isSlideLoaded,
  })

  const animation = usePickAvatarAnimations({ animation: desiredAnimation })
  const { actions, names } = useAnimations(Array(animation), ref)

  const playAnimation = useCallback(() => {
    if (actions[names[0]]) {
      actions[names[0]]?.reset().play()
    }
  }, [actions, desiredAnimation])

  useEffect(() => {
    playAnimation()
  }, [playAnimation])
}
