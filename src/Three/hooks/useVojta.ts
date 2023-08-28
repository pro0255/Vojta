import { useRef } from 'react'
import { useVojtaAnimations } from '@/Three/hooks/useVojtaAnimations'

export const useVojta = () => {
  const groupRef = useRef(null)
  useVojtaAnimations(groupRef)

  return {
    groupRef,
  }
}
