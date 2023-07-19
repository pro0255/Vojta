import { create, StoreApi, UseBoundStore } from 'zustand'
import { GuessState, VojtaState } from '@/Three/store/types'

export type ModelManagerState = {
  //guess
  guessState: GuessState
  setGuessState: (value: GuessState) => void
  //vojta
  vojtaState: VojtaState
  setVojtaState: (value: VojtaState) => void
}

export const useModelManager: UseBoundStore<StoreApi<ModelManagerState>> =
  create(set => {
    const value: ModelManagerState = {
      guessState: GuessState.Init,
      setGuessState: (newGuessState: GuessState) =>
        set(state => {
          return {
            ...state,
            guessState: newGuessState,
          }
        }),
      vojtaState: VojtaState.Init,
      setVojtaState: (newVojtaState: VojtaState) =>
        set(state => {
          return {
            ...state,
            vojtaState: newVojtaState,
          }
        }),
    }

    return value
  })
