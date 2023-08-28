import { GuessType, VojtaType } from '@/Three/types'

export const createPathToModel = (type: GuessType) => {
  return `models/guess/${type}/${type}.glb`
}

export const createPathToVojta = (type: VojtaType) => {
  return `models/vojta/${type}/${type}.glb`
}
