'use client'

import React, { FormEvent, useState } from 'react'
import { useChatStore } from '@/components/Chat/store/chat'
import { Messages } from '@/components/Chat/service/chat'
import { useModelManager } from '@/Three/store/useModelManager'
import { GuessState, VojtaState } from '@/Three/store/types'
import { createGuessMessage } from '@/components/Chat/utils/createMessage'
import { keySpecificEvent } from '@/helpers/mix/keySpecificEvent'
import { AiOutlineSend } from 'react-icons/ai'

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

  const submit = async (_: FormEvent<HTMLButtonElement>) => {
    if (Messages.canSend(value)) {
      addMessage(createGuessMessage(value))
      setValueMiddleware('')
    }
  }

  const { addMessage, messages } = useChatStore(state => ({
    addMessage: state.add,
    messages: state.messages,
  }))

  const isDisabled = Messages.isLastFromGuess(messages)
  const isSendDisabled = Messages.isEmpty(value)

  return {
    submit,
    value,
    onChange,
    isDisabled,
    isSendDisabled,
  }
}

export const Input = () => {
  const { submit, onChange, isDisabled, value, isSendDisabled } = useInput()

  return (
    <div
      className="transition-all duration-200 p-4 rounded-lg flex flex-row border-2 border-slate-100 bg-white hover:border-black focus-within:border-black"
      style={{
        maxWidth: '65%',
        minWidth: '65%',
      }}
    >
      <textarea
        autoFocus
        placeholder="Ask Vojta anything..."
        onKeyDown={keySpecificEvent(submit, ['Enter'])}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        className="focus:outline-0 block w-full bg-white resize-none"
      />
      <button disabled={isSendDisabled} onMouseDown={submit} onKeyDown={submit}>
        <AiOutlineSend
          className={`${isSendDisabled ? 'fill-slate-200' : 'fill-black'}`}
          size={25}
        />
      </button>
    </div>
  )
}
