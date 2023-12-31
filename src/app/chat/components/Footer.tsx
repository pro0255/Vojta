import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useChatStore } from '@/app/chat/chatStore'
import { Input } from '@/components/DesignSystem/Input'

const useFooter = () => {
  const isNewMessageTuple = useChatStore(state => state.newMessageTuple)

  const [isVisible, setIsVisible] = useState(false)

  const toggle = useCallback(() => {
    setIsVisible(visible => !visible)
  }, [])

  return {
    isVisible: isVisible && !isNewMessageTuple,
    toggle,
    cannotOpen: isNewMessageTuple,
  }
}

export const Footer = () => {
  const { toggle, isVisible, cannotOpen } = useFooter()

  return (
    <motion.footer
      initial={false}
      variants={{
        hidden: {
          height: '5%',
        },
        visible: {
          height: '17%',
        },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      className={`fixed bottom-0 left-0 w-[calc(100%)] bg-slate-100 z-40 flex flex-col items-center justify-center z-40 ${
        cannotOpen ? 'disabled' : ''
      }`}
    >
      <div className={'absolute top-[-20px] left-[50%]'}>
        <button onClick={toggle}>
          <CircleContainer isDisabled={cannotOpen}>
            {isVisible ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </CircleContainer>
        </button>
      </div>

      {isVisible ? (
        <motion.div
          className={'w-full flex items-center justify-center'}
          variants={{
            hidden: {
              opacity: '0',
            },
            visible: {
              opacity: '1',
            },
          }}
        >
          <Input />
        </motion.div>
      ) : null}
    </motion.footer>
  )
}
