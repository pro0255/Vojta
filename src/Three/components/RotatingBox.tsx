import React, { FC } from 'react'
import { useFrame } from '@react-three/fiber'
import { positionCalculator } from '@/Three/Layout/positionCalculator'

type Props = {
  color?: string
}
export const RotatingBox: FC<Props> = ({ color = 'red' }) => {
  const myMesh = React.useRef<any>()

  useFrame((state, delta) => {
    myMesh.current.rotation.x += delta
    myMesh.current.rotation.y += delta
    myMesh.current.rotation.z += delta
  })

  return (
    <>
      <mesh position={positionCalculator()} ref={myMesh}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}
