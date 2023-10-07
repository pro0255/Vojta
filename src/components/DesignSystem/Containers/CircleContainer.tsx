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
      className={`transition-all duration-200 p-2 rounded-full normal ${
        isDisabled ? 'disabled' : 'hover:hovered'
      }`}
    >
      {children}
    </div>
  )
}
