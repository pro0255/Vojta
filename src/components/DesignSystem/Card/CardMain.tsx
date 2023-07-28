import { GrayText, HeaderTwo } from '@/components/DesignSystem'
import { FC, ReactNode } from 'react'

type CardMainProps = {
  image?: ReactNode
  title: string
  description: string
}

export const CardMain: FC<CardMainProps> = ({ image, description, title }) => {
  return (
    <div className="flex flex-row">
      {image && <div className="mr-10">{image}</div>}
      <div className="flex flex-col">
        <div>
          <HeaderTwo className="">{title}</HeaderTwo>
        </div>
        <div>
          <GrayText>{description}</GrayText>
        </div>
      </div>
    </div>
  )
}
