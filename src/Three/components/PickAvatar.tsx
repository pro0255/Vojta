'use client'

import { Canvas } from '@react-three/fiber'
import { Guess } from '@/Three/Guess'
import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react'
import { HeaderThree, NormalText } from '@/components/DesignSystem'
import { Model } from '@/Three/models'

type Slide = {
  avatar: ReactNode
  personaName: Persona
  personaDescription?: string
}

type CarouselContent = Array<Slide>

enum MovementTranslate {
  Default = 'transform 1s linear',
}

enum Persona {
  FeDeveloper = 'Frontend Developer',
  MLAIEnthusiast = 'ML/AI Enthusiast',
  GuitarLerner = 'Taylor Swift v2',
  FPVDronLerner = 'Future FPV pilot',
}

const carousel: CarouselContent = [
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Guess.models.man position={[0, -0.8, 0]} />
      </Canvas>
    ),
    personaName: Persona.FeDeveloper,
    personaDescription: 'Ahoj 1',
  },
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Model position={[0, -0.8, 0]} />
      </Canvas>
    ),
    personaName: Persona.FPVDronLerner,
    personaDescription: 'Ahoj 2',
  },
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Guess.models.man position={[0, -0.8, 0]} />
      </Canvas>
    ),
    personaName: Persona.GuitarLerner,
    personaDescription: 'Ahoj 3',
  },
  {
    avatar: (
      <Canvas camera={{ fov: 30 }}>
        <ambientLight intensity={1} />
        <Model position={[0, -0.8, 0]} />
      </Canvas>
    ),
    personaName: Persona.MLAIEnthusiast,
    personaDescription: 'Ahoj 4',
  },
]

enum Direction {
  left = 'left',
  right = 'right',
}

type AnimatingNotFirst = {
  index: number
  direction: Direction
  name: 'not-first'
}

type AnimatingFirstRender = {
  index: number
  name: 'first'
}

type Animating = AnimatingNotFirst | AnimatingFirstRender

export const PickAvatar = () => {
  const [avatarIndex, setAvatarIndex] = useState<number>(0)
  const [animating, setAnimating] = useState<Animating | null>({
    index: avatarIndex,
    name: 'first',
  })

  const next = () => {
    setAvatarIndex(previousIndex => {
      const tryNext = previousIndex + 1

      if (tryNext > carousel.length - 1) {
        setAnimating({
          direction: Direction.left,
          index: previousIndex,
          name: 'not-first',
        })
        return 0
      }

      setAnimating({
        direction: Direction.right,
        index: previousIndex,
        name: 'not-first',
      })
      return previousIndex + 1
    })
  }
  const prev = () => {
    setAvatarIndex(previousIndex => {
      const tryPrevious = previousIndex - 1

      if (tryPrevious < 0) {
        setAnimating({
          direction: Direction.right,
          index: previousIndex,
          name: 'not-first',
        })
        return carousel.length - 1
      }

      setAnimating({
        direction: Direction.left,
        index: previousIndex,
        name: 'not-first',
      })
      return tryPrevious
    })
  }
  const endAnimation = () => {
    setAnimating(null)
  }

  const slide = carousel[avatarIndex]

  return (
    <Carousel
      next={next}
      prev={prev}
      slide={slide}
      animation={animating}
      endAnimation={endAnimation}
    />
  )
}

type CarouselProps = {
  slide: Omit<SlideProps, 'slideId'>
  animation: Animating | null
  endAnimation: () => void
  next: () => void
  prev: () => void
}

type SlideProps = {
  slideId: string
  endAnimation?: () => void
  animation?: SlideAnimation
} & Slide

enum Translate {
  Zero = 'translateX(0%)',
  Right = 'translateX(100%)',
  Left = 'translateX(-100%)',
}

const Slide: FC<SlideProps> = ({
  avatar,
  personaDescription,
  personaName,
  endAnimation,
  animation,
  slideId,
}) => {
  const [thisAnimation, setThisAnimation] = useState<CSSProperties>(
    createCSSProperties(animation?.start)
  )

  useEffect(() => {
    console.log(slideId, 'mount')
    setThisAnimation(createCSSProperties(animation?.end))
  }, [])

  return (
    <div
      id={slideId}
      style={{
        ...thisAnimation,
        position: 'absolute',
        width: '100%',
        zIndex: endAnimation ? 2 : 1,
      }}
      onTransitionEnd={endAnimation}
    >
      <div style={{ height: '500px' }}>{avatar}</div>
      <div className={'flex flex-col items-center'}>
        <HeaderThree>{personaName}</HeaderThree>
        <NormalText>{personaDescription}</NormalText>
      </div>
    </div>
  )
}

type AnimatedSlideProps = {
  animation?: SlideAnimation
  index: number
} & Pick<CarouselProps, 'endAnimation'> &
  Pick<SlideProps, 'slideId'>

const createCSSProperties = (
  transform?: SlideAnimation['end']
): CSSProperties => {
  return {
    transform: transform ?? Translate.Zero,
    transition: MovementTranslate.Default,
  }
}

const AnimatedSlide: FC<AnimatedSlideProps> = ({
  animation,
  endAnimation,
  index,
  slideId,
}) => {
  const slide = carousel[index]

  return (
    <Slide
      {...slide}
      endAnimation={endAnimation}
      animation={animation}
      slideId={slideId}
    />
  )
}

type SlideAnimation = {
  start: Translate
  end: Translate
}

const ArrowLeft = () => {
  return (
    <div
      style={{
        content: '',
        borderLeft: '2px solid #000',
        borderBottom: '2px solid #000',
        width: '20px',
        height: '20px',
        transform: 'rotate(45deg)',
        cursor: 'pointer',
        display: 'block',
      }}
    ></div>
  )
}
const ArrowRight = () => {
  return (
    <div
      style={{
        content: '',
        borderRight: '2px solid #000',
        borderTop: '2px solid #000',
        width: '20px',
        height: '20px',
        transform: 'rotate(45deg)',
        cursor: 'pointer',
        display: 'block',
      }}
    ></div>
  )
}

const useSlideTranslate = (
  animation: Animating | null
): {
  goingToScene: SlideAnimation
  movingOutOfScene?: SlideAnimation
} | null => {
  if (!animation) {
    return null
  }

  if (animation.name === 'not-first') {
    const { direction } = animation

    const goingToScene: SlideAnimation = {
      start: direction === Direction.right ? Translate.Left : Translate.Right,
      end: Translate.Zero,
    }

    const movingOutOfScene: SlideAnimation = {
      start: Translate.Zero,
      end: direction === Direction.right ? Translate.Right : Translate.Left,
    }

    return { goingToScene, movingOutOfScene }
  }

  const goingToScene: SlideAnimation = {
    start: Translate.Zero,
    end: Translate.Zero,
  }

  return { goingToScene }
}

const Carousel: FC<CarouselProps> = ({
  slide,
  animation,
  endAnimation,
  prev,
  next,
}) => {
  const slideTranslate = useSlideTranslate(animation)

  return (
    <div
      style={{ position: 'relative', height: '600px', overflow: 'hidden' }}
      key={slide.personaName}
    >
      <Slide
        key={slide.personaName}
        {...slide}
        animation={slideTranslate?.goingToScene}
        slideId={'going to scene'}
      />

      {animation && (
        <AnimatedSlide
          key={slide.personaName}
          endAnimation={endAnimation}
          animation={slideTranslate?.movingOutOfScene}
          index={animation.index}
          slideId={'moving out of scene'}
        />
      )}

      <button
        style={{
          zIndex: 3,
          position: 'absolute',
          left: 20,
          top: '50%',
        }}
        onClick={prev}
      >
        <ArrowLeft />
      </button>
      <button
        style={{
          zIndex: 3,
          position: 'absolute',
          right: 20,
          top: '50%',
        }}
        onClick={next}
      >
        <ArrowRight />
      </button>

      <h1
        style={{
          marginTop: '60%',
          textAlign: 'center',
        }}
      >
        Vojtech Prokop
      </h1>
    </div>
  )
}
