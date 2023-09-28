import { ScrollTo } from '@/components/Chat/components/Actions/ScrollTo'
import { ReactNode, useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
}

const ActionsContainer = ({ children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      initial={false}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? '#ffffff' : '#f1f5f9',
      }}
      transition={{ ease: 'linear', duration: 0.2 }}
      className="z-50 border-solid border-2 border-slate-200 p-2 rounded-full fixed bottom-20 right-12"
    >
      {isHovered ? (
        <div className={'flex flex-row items-center justify-center'}>
          {children}
        </div>
      ) : (
        <AiOutlineMore size={25} />
      )}
    </motion.button>
  )
}

export const Actions = () => {
  return (
    <ActionsContainer>
      <div>
        <ScrollTo target={'top'} />
      </div>
      <div className={'ml-2'}>
        <ScrollTo target={'bottom'} />
      </div>
    </ActionsContainer>
  )
}
