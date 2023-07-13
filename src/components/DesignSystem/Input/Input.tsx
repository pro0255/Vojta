'use client'

import { FormEvent, useState } from 'react'
import { useChatStore } from '@/components/Chat/store/chat'
import { Author } from '@/components/Chat/types'
import { Messages } from '@/components/Chat/domain/chat'

const useInput = () => {
  const [value, setValue] = useState<string>('')

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)
  }

  const submit = (_: FormEvent<HTMLButtonElement>) => {
    addMessage({
      timestamp: new Date().getMilliseconds(),
      text: value,
      author: Author.Guess,
    })
    setValue('')
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
    <div className="flex flex-row">
      <input
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        className="sticky bottom-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button disabled={isDisabled} onMouseDown={submit}>
        SEND
      </button>
    </div>
  )
}
