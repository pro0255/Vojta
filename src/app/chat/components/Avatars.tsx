import { Canvas } from '@react-three/fiber'
import { GuessWoman, VojtaYoungAdult } from '@/3d/models'
import React, { useEffect, useState } from 'react'

const VALUE = 1100

const getValue = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth > 2000) {
      return 1300
    }

    if (window.innerWidth > 1000) {
      return 1000
    }

    return 800
  }

  return VALUE
}

export const Avatars = () => {
  const [positionX, setPositionX] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth / getValue()
    }
    return 0
  })

  useEffect(() => {
    const updatePositionX = () => {
      setPositionX(window.innerWidth / getValue())
    }

    updatePositionX()

    window.addEventListener('resize', updatePositionX)

    return () => {
      window.removeEventListener('resize', updatePositionX)
    }
  }, [])

  return (
    <Canvas
      shadows
      camera={{
        fov: 30,
      }}
      style={{
        zIndex: -10,
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    >
      <group>
        <GuessWoman scale={[0.7, 0.7, 0.7]} position={[-positionX, -1, 0]} />
      </group>
      <ambientLight intensity={1} />
      <group position-y={-1}>
        <VojtaYoungAdult scale={[0.7, 0.7, 0.7]} position={[positionX, 0, 0]} />
      </group>
    </Canvas>
  )
}
