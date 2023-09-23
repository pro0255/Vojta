import { GrayText } from '@/components/DesignSystem'
import { BoldText } from '@/components/DesignSystem/Text/BoldText'

type Props = {
  title: string
  description: string
}

export const StartingMessage = ({ description, title }: Props) => {
  return (
    <div
      className={
        'flex flex-col items-start justify-around p-4 bg-white border-solid border-2 border-slate-100 rounded-xl'
      }
    >
      <BoldText>{title}</BoldText>
      <GrayText>{description}</GrayText>
    </div>
  )
}
