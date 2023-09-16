'use client'

import React, { FormEvent, useState } from 'react'
import { useChatStore } from '@/components/Chat/store/chat'
import { Author } from '@/components/Chat/types'
import { Messages } from '@/components/Chat/domain/chat'
import Image from 'next/image'
import { useModelManager } from '@/Three/store/useModelManager'
import { GuessState, VojtaState } from '@/Three/store/types'

const useInput = () => {
  const { setGuessState, setVojtaState } = useModelManager(state => ({
    setGuessState: state.setGuessState,
    setVojtaState: state.setVojtaState,
  }))
  const [value, setValue] = useState<string>('')

  const setValueMiddleware = (newValue: string | undefined) => {
    if (Messages.validate(newValue)) {
      if (Messages.isEmpty(newValue)) {
        setGuessState(GuessState.Init)
        setVojtaState(VojtaState.Init)
      } else {
        setGuessState(GuessState.Talking)
        setVojtaState(VojtaState.Listening)
      }

      setValue(newValue!)
    }
  }

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value
    setValueMiddleware(newValue)
  }

  const submit = (_: FormEvent<HTMLButtonElement>) => {
    addMessage({
      timestamp: new Date().getMilliseconds(),
      text: value,
      author: Author.Guess,
    })
    setValueMiddleware('')
  }

  const { addMessage, messages } = useChatStore(state => ({
    addMessage: state.add,
    messages: state.messages,
  }))

  const isDisabled = Messages.isLastFromGuess(messages)

  return {
    submit,
    value,
    onChange,
    isDisabled,
  }
}

export const Input = () => {
  const { submit, onChange, isDisabled, value } = useInput()

  return (
    <div
      className="p-4 rounded-lg flex flex-row border-2 border-b-slate-100 bg-white"
      style={{
        minWidth: '65%',
      }}
    >
      <textarea
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        className="focus:outline-0 block w-full bg-white resize-none"
      />
      <button disabled={isDisabled} onMouseDown={submit}>
        <Image
          src={`/assets/icons/send.png`}
          alt={'sending'}
          width={40}
          height={40}
        />
      </button>
    </div>
  )
}
