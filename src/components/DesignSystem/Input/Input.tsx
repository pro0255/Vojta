'use client'

import React, { FormEvent, useState } from 'react'
import { useChatStore } from '@/components/Chat/store/chat'
import { Messages } from '@/components/Chat/service/chat'
import { useModelManager } from '@/3d/store/useModelManager'
import { GuessState, VojtaState } from '@/3d/store/types'
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
        setVojtaState(VojtaState.Init)
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
      try {
        addMessage(createGuessMessage(value))
        setValueMiddleware('')
      } catch (e) {
        console.log(e)
        console.error(e)
      }
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
      className="transition-all duration-200 p-4 rounded-lg flex flex-row normal bg-white focus-within:border-black"
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
          className={`${
            isSendDisabled
              ? 'disabledIcon'
              : 'normalIcon hover:hoveredIcon focus:hoveredIcon'
          }`}
          size={25}
        />
      </button>
    </div>
  )
}
