import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

type Props = {
  text: ReactNode
  icon: ReactNode
  alt?: string
  rawIcon?: boolean
}
export const FooterButton: FC<Props> = ({
  icon,
  text,
  alt = '',
  rawIcon = false,
}) => {
  return (
    <button className="transition-all duration-200 normal bg-white hover:hovered focus:hovered min-w-xl p-3 rounded-b flex flex-row items-center justify-evenly">
      <span className={'mr-2'}>
        {rawIcon ? (
          <span>{icon}</span>
        ) : (
          <Image width={30} height={30} src={icon} alt={alt} />
        )}
      </span>
      {text}
      <BsArrowUpRight className={'ml-1 fill-slate-400'} />
    </button>
  )
}
