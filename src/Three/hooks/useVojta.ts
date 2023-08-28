import { useRef } from 'react'
import { useVojtaAnimations } from '@/Three/hooks/useVojtaAnimations'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useModelManager } from '@/Three/store/useModelManager'
import { VojtaState } from '@/Three/store/types'

export const useVojta = () => {
  const groupRef = useRef(null)
  const vojtaState = useModelManager(manager => manager.vojtaState)

  useVojtaAnimations(groupRef)

  useFrame(state => {
    if (
      groupRef.current !== null &&
      ![VojtaState.Thinking, VojtaState.Talking, VojtaState.Waving].includes(
        vojtaState
      )
    ) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
      ;(groupRef.current as any).getObjectByName('Head').lookAt(target)
    }
  })
  return {
    groupRef,
  }
}
