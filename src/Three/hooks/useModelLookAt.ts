import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { MutableRefObject, useState } from 'react'

type Props = {
  modelRef: MutableRefObject<any>
  isCameraVector: boolean
  isMouseVector: boolean
}

export const useModelLookAt = ({
  modelRef,
  isCameraVector,
  isMouseVector,
}: Props) => {
  // TODO: fix a set looking at Vector ... should be probably as reference instead of state?
  const [lookingAtVector] = useState<Vector3>(new Vector3())
  const [targetVector, setTargetVector] = useState<Vector3>(new Vector3())

  useFrame(state => {
    const model = modelRef.current as any
    const head = model.getObjectByName('Head')
    const spine = model.getObjectByName('Spine')

    const mouseVector = new Vector3(state.mouse.x, state.mouse.y, 3)
    const cameraVector = new Vector3(
      state.camera.position.x,
      state.camera.position.y,
      5
    )

    if (isCameraVector) {
      setTargetVector(cameraVector)
    }

    if (isMouseVector) {
      setTargetVector(mouseVector)
    }

    lookingAtVector?.lerp(targetVector, 0.005)

    head?.lookAt(lookingAtVector)
    spine?.lookAt(lookingAtVector)
  })
}
