import { useAnimation } from '@/3d/hooks/useAnimation'

export type CarouselAnimation =
  | 'Guitar'
  | 'Kneeling'
  | 'Robot'
  | 'Sitting'
  | 'Golf'

type Props = {
  animation: CarouselAnimation
}

export const usePickAvatarAnimations = ({ animation }: Props) => {
  return useAnimation({
    path: 'animations/mix',
    animation,
  })
}
