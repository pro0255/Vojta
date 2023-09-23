import { Input } from '@/components/DesignSystem'
import { NavigateToHome } from '@/components/Chat/ChatWrapper/NavigateToHome'
import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(true)

  const toggle = useCallback(() => {
    setIsVisible(visible => !visible)
  }, [])

  return (
    <motion.footer
      variants={{
        hidden: {
          height: '5%',
        },
        visible: {
          height: '20%',
        },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      className="fixed bottom-0 left-0 w-[calc(100%)] bg-slate-100 border-t-2 border-b-slate-100 z-40 flex flex-col items-center justify-center z-40"
    >
      {isVisible}
      <div className={'absolute top-[-20px] left-[50%]'}>
        <CircleContainer onClick={toggle}>
          {isVisible ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </CircleContainer>
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
          <NavigateToHome />
        </motion.div>
      ) : null}
    </motion.footer>
  )
}
