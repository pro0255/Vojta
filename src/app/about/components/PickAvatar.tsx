'use client'

import { Canvas } from '@react-three/fiber'
import React, { CSSProperties, FC, ReactNode, useState } from 'react'

import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Pilot } from '@/3d/models/vojta/pilot/Pilot'
import { Robot } from '@/3d/models/vojta/robot/Robot'
import { Programmer } from '@/3d/models/vojta/programmer/Programmer'
import { Musician } from '@/3d/models'
import { Golfer } from '@/3d/models/vojta/golf/Golfer'
import { Html } from '@react-three/drei'
import Image from 'next/image'
import { NormalText } from '@/components/DesignSystem/Text/NormalText'
import { HeaderThree } from '@/components/DesignSystem/Text/Header'

type Slide = {
  avatar: ReactNode
  personaName: Persona
  personaDescription?: string
}

type CarouselContent = Array<Slide>

enum MovementTranslate {
  Default = 'transform 0.2s ease-out',
}

enum Persona {
  FeDeveloper = 'Frontend Developer',
  MLAIEnthusiast = 'ML/AI Enthusiast',
  GuitarLerner = 'Guitar Lerner',
  FPVDronLerner = 'Future FPV pilot',
  Golf = 'Golf beginner',
  Vojta = '',
}

const carousel: CarouselContent = [
  {
    avatar: (
      <Html className={'flex flex-col items-center justify-center'}></Html>
    ),
    personaName: Persona.Vojta,
    personaDescription: '',
  },
  {
    avatar: <Robot position={[0, -1, -0.4]} />,
    personaName: Persona.MLAIEnthusiast,
    personaDescription:
      "I'm passionate about ML and AI projects, especially their implementation in hospitals to improve outcomes and save lives. One intriguing project I'd love to try is using ML to assist psychiatrists in quickly delivering accurate medication to patients in need. It has the potential to significantly enhance mental healthcare.",
  },
  {
    avatar: <Musician position={[0, -1, -0.4]} />,
    personaName: Persona.GuitarLerner,
    personaDescription:
      "I've been playing the guitar since 2022, and at this point, I can play a few songs. I have a particular dislike for bar chords, but I absolutely love playing chords like C, G, Am, and D. Slow songs are the ones that truly resonate with me and capture my interest. If you have any recommendation for good acoustic playlist, please share it with me!",
  },
  {
    avatar: <Programmer position={[0, -1, 0]} />,
    personaName: Persona.FeDeveloper,
    personaDescription:
      "My goal is to create impactful projects that positively impact people's lives. I specialize in implementing the frontend side of projects using technologies such as React, Next.js, Apollo, and MobX.",
  },
  {
    avatar: <Golfer position={[0.2, -1, 0]} />,
    personaName: Persona.Golf,
    personaDescription: 'I am golf beginner! My favourite club is 8!',
  },
  {
    avatar: <Pilot position={[0.15, -1, 0]} />,
    personaName: Persona.FPVDronLerner,
    personaDescription:
      "I am currently learning to fly FPV drones in a simulator, but I must admit that I'm not very skilled at it yet. However, my future goal is to improve my flying abilities and ultimately be able to produce videos that capture special moments and create lasting memories for myself.",
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
      <div
        className={
          'flex flex-row items-center justify-center h-[600px] md:h-[500px] xl:h-[450px]'
        }
      >
        {slideId === Persona.Vojta && (
          <Image
            className={'absolute rounded-full'}
            width={200}
            height={200}
            alt={'Vojtech Prokop photo'}
            src={'./assets/vojta_photo.png'}
          />
        )}
        <Canvas camera={{ fov: 25 }}>
          <ambientLight intensity={1} />
          {avatar}
        </Canvas>
      </div>
      <div className={'mt-10 flex flex-col items-center'}>
        <HeaderThree>{personaName}</HeaderThree>
        <Paragraph>
          <NormalText
            style={{
              textAlign: 'center',
              display: 'flex',
            }}
          >
            {personaDescription}
          </NormalText>
        </Paragraph>
      </div>
    </div>
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
    <div
      style={{ position: 'relative', overflow: 'hidden' }}
      className={'h-[1100px] md:h-[900px] xl:h-[800px]'}
    >
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
        <CircleContainer isDisabled={!prev}>
          <AiOutlineArrowLeft />
        </CircleContainer>
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
        <CircleContainer isDisabled={!next}>
          <AiOutlineArrowRight />
        </CircleContainer>
      </button>

      <div
        className={'w-full flex flex-row justify-center items-center'}
        style={{
          textAlign: 'center',
          zIndex: 3,
          position: 'absolute',
          top: '55%',
        }}
      >
        <h1>Vojtech Prokop</h1>
      </div>
    </div>
  )
}
