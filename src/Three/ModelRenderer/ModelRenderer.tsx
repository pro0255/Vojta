import React, { FC } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from '@react-three/fiber/dist/declarations/src/three-types'

type Props = {
  color: string
  position: Vector3
}

export const ModelRenderer: FC<Props> = ({ color = 'red', position }) => {
  const myMesh = React.useRef<any>()

  useFrame((state, delta) => {
    myMesh.current.rotation.x += delta
    myMesh.current.rotation.y += delta
    myMesh.current.rotation.z += delta
  })

  return (
    <>
      <mesh position={position} ref={myMesh}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}
