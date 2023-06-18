'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'

export const ThreeTest = () => {
  return (
    <Canvas>
      <MyAnimatedBox />
    </Canvas>
  )
}

const MyAnimatedBox = () => {
  const myMesh = React.useRef<any>()

  useFrame(({ clock }) => {
    if (!myMesh.current?.rotation) {
      return
    }
    myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.position.y += 0.1
  })
  return (
    <>
      <pointLight position={[5, 20, 10]} />

      <mesh position={[0, 0, 0]} ref={myMesh}>
        <boxGeometry />
        <meshBasicMaterial color="royalblue" />
      </mesh>
    </>
  )
}
