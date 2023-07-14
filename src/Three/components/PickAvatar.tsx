'use client'

import { Canvas } from '@react-three/fiber'
import { Guess } from '@/Three/Guess'
import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react'
import { NormalText } from '@/components/DesignSystem'
import { Model } from '@/Three/models'

type Slide = {
  avatar: ReactNode
  description: string
}

type CarouselContent = Array<Slide>

const carousel: CarouselContent = [
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Guess.models.man position={[0, -0.8, 0]} />
      </Canvas>
    ),
    description: 'Ahoj',
  },
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Model position={[0, -0.8, 0]} />
      </Canvas>
    ),
    description: 'Ahoj',
  },
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Guess.models.man position={[0, -0.8, 0]} />
      </Canvas>
    ),
    description: 'Ahoj',
  },
]

enum Direction {
  left = 'left',
  right = 'right',
}

type Animation = {
  index: number
  direction: Direction
}

export const PickAvatar = () => {
  const [avatarIndex, setAvatarIndex] = useState<number>(0)
  const [animation, setAnimation] = useState<Animation | null>(null)

  const next = () => {
    setAvatarIndex(previousIndex => {
      const tryNext = previousIndex + 1

      if (tryNext > carousel.length - 1) {
        setAnimation({
          direction: Direction.left,
          index: previousIndex,
        })
        return 0
      }

      setAnimation({
        direction: Direction.right,
        index: previousIndex,
      })
      return previousIndex + 1
    })
  }

  const prev = () => {
    setAvatarIndex(previousIndex => {
      const tryPrevious = previousIndex - 1

      if (tryPrevious < 0) {
        setAnimation({
          direction: Direction.right,
          index: previousIndex,
        })
        return carousel.length - 1
      }

      setAnimation({
        direction: Direction.left,
        index: previousIndex,
      })
      return tryPrevious
    })
  }

  const endAnimation = () => {
    console.log('endAnimation')
    setAnimation(null)
  }

  const slide = carousel[avatarIndex]

  return (
    <div>
      <Carousel
        slide={slide}
        animation={animation}
        endAnimation={endAnimation}
      />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      {avatarIndex}
    </div>
  )
}

type CarouselProps = {
  slide: SlideProps
  animation: Animation | null
  endAnimation: () => void
}

type SlideProps = {
  description: string
  avatar: ReactNode
  endAnimation?: () => void
  animationCss?: CSSProperties
}

const Slide: FC<SlideProps> = ({
  avatar,
  description,
  animationCss,
  endAnimation,
}) => {
  const [thisAnimation, setThisAnimation] = useState<CSSProperties>({
    transform: 'translateX(0%)',
  })

  useEffect(() => {
    console.log(thisAnimation, animationCss)
    if (animationCss) {
      setThisAnimation(animationCss)
    }
  }, [])

  return (
    <div
      style={{
        ...thisAnimation,
        position: 'absolute',
        width: '100%',
        zIndex: endAnimation ? 2 : 1,
      }}
      onTransitionEnd={endAnimation}
    >
      <div style={{ height: '500px' }}>{avatar}</div>
      <div>
        <NormalText>{description}</NormalText>
      </div>
    </div>
  )
}

type AnimatedSlideProps = {
  animation: Animation
} & Pick<CarouselProps, 'endAnimation'>

const createCSSProperties = (direction: Direction): CSSProperties => {
  return {
    transform:
      direction === Direction.right ? 'translateX(100%)' : 'translateX(-100%)',
    transition: 'transform 1s linear',
  }
}

const AnimatedSlide: FC<AnimatedSlideProps> = ({ animation, endAnimation }) => {
  console.log(animation)

  const { index, direction } = animation
  const slide = carousel[index]
  const animationCSS = createCSSProperties(direction)

  return (
    <Slide {...slide} animationCss={animationCSS} endAnimation={endAnimation} />
  )
}

const Carousel: FC<CarouselProps> = ({ slide, animation, endAnimation }) => {
  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <Slide key={slide.description} {...slide} />

      {animation && (
        <AnimatedSlide
          key={animation.index}
          animation={animation}
          endAnimation={endAnimation}
        />
      )}

      {JSON.stringify(animation)}
    </div>
  )
}
