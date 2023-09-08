import { useRef, useState } from 'react'
import { useVojtaAnimations } from '@/Three/hooks/useVojtaAnimations'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useModelManager } from '@/Three/store/useModelManager'

const step = 0.005

export const useVojta = () => {
  const groupRef = useRef(null)
  const vojtaState = useModelManager(manager => manager.vojtaState)
  const [target, setTarget] = useState<Vector3>(new Vector3(10, 10, 10))

  useVojtaAnimations(groupRef)

  useFrame(state => {
    setTarget(prev => {
      return new Vector3(prev.x - step, prev.y - step, 1)
    })
    ;(groupRef.current as any).getObjectByName('Head')?.lookAt(target)
  })
  return {
    groupRef,
  }
}
