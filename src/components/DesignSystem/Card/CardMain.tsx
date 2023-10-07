import { GrayText, HeaderThree } from '@/components/DesignSystem'
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
          <HeaderThree className="">{title}</HeaderThree>
        </div>
        <div>
          <GrayText>{description}</GrayText>
        </div>
      </div>
    </div>
  )
}
