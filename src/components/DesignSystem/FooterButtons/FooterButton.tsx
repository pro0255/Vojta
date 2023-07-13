import { FC } from 'react'
import { NormalText } from '@/components/DesignSystem'
import Image from 'next/image'

type Props = {
  text: string
  icon: string
  alt: string
}
export const FooterButton: FC<Props> = ({ icon, text, alt }) => {
  return (
    <button className="min-w-xl p-3 rounded-b border-solid border-2 border-b-slate-100 flex flex-row items-center justify-evenly">
      <Image width={30} height={30} src={icon} alt={alt} />
      <NormalText>{text}</NormalText>
    </button>
  )
}
