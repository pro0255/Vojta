import { ReactNode } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

type Props = {
  children: ReactNode
  onClick?: () => void
  isDisabled?: boolean
}

export const CircleContainer = ({
  children = <AiOutlineArrowDown />,
  onClick,
  isDisabled,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-200 p-2 rounded-full border-solid border-2 bg-slate-100 ${
        isDisabled ? 'opacity-50' : 'hover:border-black'
      }`}
    >
      {children}
    </div>
  )
}
