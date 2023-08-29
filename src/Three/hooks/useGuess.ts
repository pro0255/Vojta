import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useGuessAnimations } from '@/Three/hooks/useGuessAnimations'
import { useModelManager } from '@/Three/store/useModelManager'
import { GuessState } from '@/Three/store/types'

export const useGuess = () => {
  const groupRef = useRef(null)
  const guessState = useModelManager(model => model.guessState)

  useGuessAnimations(groupRef)

  //https://github.com/pmndrs/react-three-fiber/discussions/807
  useFrame(state => {
    if (groupRef.current !== null && guessState !== GuessState.Talking) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
      ;(groupRef.current as any).getObjectByName('Head')?.lookAt(target)
      ;(groupRef.current as any).getObjectByName('Spine')?.lookAt(target)
    }
  })
  return {
    groupRef,
  }
}
