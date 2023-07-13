'use client'

import React from 'react'

export const Guess = () => {
  return (
    <mesh scale={[0.5, 0.5, 0.5]} position={[-1.5, 0, 0]}>
      <boxGeometry />
      <meshBasicMaterial color={'blue'} />
    </mesh>
  )
}
