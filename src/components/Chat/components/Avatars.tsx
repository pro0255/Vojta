import { Canvas } from '@react-three/fiber'
import { GuessWoman, VojtaYoungAdult } from '@/Three/models'
import React, { useEffect, useState } from 'react'

export const Avatars = () => {
  const [positionX, setPositionX] = useState(window.innerWidth / 840)

  useEffect(() => {
    const updatePositionX = () => {
      setPositionX(window.innerWidth / 840)
    }

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
