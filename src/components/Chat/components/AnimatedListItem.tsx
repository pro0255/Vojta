import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AnimatedListItem = ({ children }: Props) => {
  return (
    <motion.li
      className={'w-full'}
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: 'auto',
        opacity: [0, 1],
      }}
      transition={{ ease: 'anticipate', duration: 1 }}
    >
      {children}
    </motion.li>
  )
}
