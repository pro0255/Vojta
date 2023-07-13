import { create, StoreApi, UseBoundStore } from 'zustand'

export type VojtaStore = {
  isThinking: boolean
}

export const useVojtaStore: UseBoundStore<StoreApi<VojtaStore>> = create(
  set => {
    const value: VojtaStore = {
      isThinking: false,
    }

    return value
  }
)
