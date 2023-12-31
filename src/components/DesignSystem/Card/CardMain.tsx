import { FC, ReactNode } from 'react'
import { HeaderThree } from '@/components/DesignSystem/Text/Header'
import { GrayText } from '@/components/DesignSystem/Text/GrayText'

type CardMainProps = {
  image?: ReactNode
  title: string
  description: string
}

export const CardMain: FC<CardMainProps> = ({ image, description, title }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      {image && <div className="mb-7 md:mb-0 md:mr-10">{image}</div>}
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
