import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useGuessAnimations } from '@/Three/hooks/useGuessAnimations'
import { useModelManager } from '@/Three/store/useModelManager'
import { GuessState } from '@/Three/store/types'

export const useGuess = () => {
  const groupRef = useRef(null)
  const guessState = useModelManager(model => model.guessState)
  const [lookingAtVector, setLookingAtVector] = useState<Vector3>(new Vector3())
  const [targetVector, setTargetVector] = useState<Vector3>(new Vector3())

  useGuessAnimations(groupRef)

  useFrame(state => {
    const model = groupRef.current as any
    const head = model.getObjectByName('Head')
    const spine = model.getObjectByName('Spine')

    const mouseVector = new Vector3(state.mouse.x, state.mouse.y, 1)
    const cameraVector = new Vector3(
      state.camera.position.x,
      state.camera.position.y,
      5
    )
    if ([GuessState.Talking].includes(guessState)) {
      setTargetVector(cameraVector)
    }

    if ([GuessState.Init].includes(guessState)) {
      setTargetVector(mouseVector)
    }

    lookingAtVector?.lerp(targetVector, 0.015)

    head?.lookAt(lookingAtVector)
    spine?.lookAt(lookingAtVector)
  })
  return {
    groupRef,
  }
}
