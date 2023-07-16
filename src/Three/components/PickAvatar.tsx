'use client'

import { Canvas } from '@react-three/fiber'
import { Guess } from '@/Three/Guess'
import React, { CSSProperties, FC, ReactNode, useState } from 'react'
import { HeaderThree, NormalText } from '@/components/DesignSystem'
import { Model } from '@/Three/models'

type Slide = {
  avatar: ReactNode
  personaName: Persona
  personaDescription?: string
}

type CarouselContent = Array<Slide>

enum MovementTranslate {
  Default = 'transform 0.5s ease-out',
}

enum Persona {
  FeDeveloper = 'Frontend Developer',
  MLAIEnthusiast = 'ML/AI Enthusiast',
  GuitarLerner = 'Taylor Swift v2',
  FPVDronLerner = 'Future FPV pilot',
}

const carousel: CarouselContent = [
  {
    avatar: <Guess.models.man position={[0, -0.8, 0]} />,
    personaName: Persona.FeDeveloper,
    personaDescription: 'Ahoj 1',
  },
  {
    avatar: <Model position={[0, -0.8, 0]} />,
    personaName: Persona.FPVDronLerner,
    personaDescription: 'Ahoj 2',
  },
  {
    avatar: <Guess.models.man position={[0, -0.8, 0]} />,
    personaName: Persona.GuitarLerner,
    personaDescription: 'Ahoj 3',
  },
  {
    avatar: <Model position={[0, -0.8, 0]} />,
    personaName: Persona.MLAIEnthusiast,
    personaDescription: 'Ahoj 4',
  },
]

export const PickAvatar = () => {
  const [avatarIndex, setAvatarIndex] = useState<number>(0)

  const next = () => {
    setAvatarIndex(previousIndex => {
      const tryNext = previousIndex + 1

      if (tryNext > carousel.length - 1) {
        return 0
      }

      return previousIndex + 1
    })
  }
  const prev = () => {
    setAvatarIndex(previousIndex => {
      const tryPrevious = previousIndex - 1

      if (tryPrevious < 0) {
        return carousel.length - 1
      }

      return tryPrevious
    })
  }

  return (
    <Carousel
      activeIndex={avatarIndex}
      slides={carousel}
      next={avatarIndex === carousel.length - 1 ? undefined : next}
      prev={avatarIndex === 0 ? undefined : prev}
    />
  )
}

type CarouselProps = {
  slides: CarouselContent
  next?: () => void
  prev?: () => void
  activeIndex: number
}

type SlideProps = {
  slideIndex: number
  slideId: string
} & Slide

const Slide: FC<SlideProps> = ({
  avatar,
  personaDescription,
  personaName,
  slideId,
}) => {
  return (
    <div
      id={slideId}
      style={{
        position: 'absolute',
        width: '100%',
      }}
    >
      <div style={{ height: '500px' }}>
        <Canvas camera={{ fov: 30 }}>
          <ambientLight intensity={1} />
          {avatar}
        </Canvas>
      </div>
      <div className={'flex flex-col items-center'}>
        <HeaderThree>{personaName}</HeaderThree>
        <NormalText>{personaDescription}</NormalText>
      </div>
    </div>
  )
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
const getTransform = (
  thisIndex: number,
  activeIndex: number,
  maxIndex: number
) => {
  if (thisIndex === activeIndex) {
    return 0
  }

  if (activeIndex === 0 && thisIndex === maxIndex - 1) {
    return -1 * 100
  }

  if (activeIndex === maxIndex - 1 && thisIndex === 0) {
    return 100
  }

  const diff = thisIndex - activeIndex

  return diff * 100
}

const getVisibility = (
  thisIndex: number,
  activeIndex: number
): CSSProperties['visibility'] => {
  if (thisIndex === activeIndex) {
    return 'visible'
  }

  const diff = Math.abs(thisIndex - activeIndex)

  if (diff === 1) {
    return 'visible'
  }

  return 'hidden'
}

const createCSSProperties = (
  thisIndex: number,
  activeIndex: number,
  maxIndex: number
): CSSProperties => {
  const transform = getTransform(thisIndex, activeIndex, maxIndex)
  const visibility = getVisibility(thisIndex, activeIndex)

  return {
    transform: `translate(${transform}%)`,
    transition: MovementTranslate.Default,
    visibility: visibility,
  }
}

const Carousel: FC<CarouselProps> = ({ prev, next, slides, activeIndex }) => {
  return (
    <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
      <ul>
        {slides.map(({ avatar, personaDescription, personaName }, index) => {
          return (
            <li
              key={personaName}
              style={{
                ...createCSSProperties(index, activeIndex, slides.length),
              }}
            >
              <Slide
                slideIndex={index}
                avatar={avatar}
                personaName={personaName}
                personaDescription={personaDescription}
                slideId={personaName}
              />
            </li>
          )
        })}
      </ul>

      <button
        disabled={!prev}
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
        disabled={!next}
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
