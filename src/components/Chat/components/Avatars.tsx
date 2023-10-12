import { Canvas } from '@react-three/fiber'
import { GuessWoman, VojtaYoungAdult } from '@/Three/models'
import React from 'react'

export const Avatars = () => {
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
        <GuessWoman scale={[0.7, 0.7, 0.7]} position={[-1.8, -1, 0]} />
      </group>
      <ambientLight intensity={1} />
      <group position-y={-1}>
        <VojtaYoungAdult scale={[0.7, 0.7, 0.7]} position={[1.8, 0, 0]} />
      </group>
    </Canvas>
  )
}
