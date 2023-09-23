import { ReactNode } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

type Props = {
  children: ReactNode
  onClick?: () => void
}

export const CircleContainer = ({
  children = <AiOutlineArrowDown />,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className="p-2 rounded-full border-solid border-2 bg-slate-100"
    >
      {children}
    </div>
  )
}
