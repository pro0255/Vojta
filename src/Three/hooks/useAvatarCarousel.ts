import { useRef } from 'react'
import { useModelLookAt } from '@/Three/hooks/useModelLookAt'

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

  // const animation = useAnimation({
  //   path: 'animations/mix',
  //   animation: desiredAnimation,
  // })
  // const { actions } = useAnimations([animation], groupRef)
  //
  // useEffect(() => {
  //   actions['Kneeling']!.play()
  // }, [actions, desiredAnimation])

  return {
    groupRef,
  }
}
