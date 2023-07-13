import { FC, ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  text: ReactNode
  icon: string
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
    <button className="min-w-xl p-3 rounded-b border-solid border-2 border-b-slate-100 flex flex-row items-center justify-evenly">
      {rawIcon ? (
        <span>{icon}</span>
      ) : (
        <Image width={30} height={30} src={icon} alt={alt} />
      )}
      {text}
    </button>
  )
}
