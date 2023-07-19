'use client'

import { FC } from 'react'
import { useModelManager } from '@/Three/store/useModelManager'

export const DebugComponent: FC = () => {
  const modelManagerState = useModelManager(state => ({
    guessState: state.guessState,
    vojtaState: state.vojtaState,
  }))

  return (
    <div className="fixed top-0 w-[calc(100%)] flex flex-col justify-center items-center">
      <div>This is model manager {JSON.stringify(modelManagerState)}</div>
    </div>
  )
}
