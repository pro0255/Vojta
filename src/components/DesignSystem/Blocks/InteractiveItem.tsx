import { FC } from 'react'
import Image from 'next/image'

export type InteractiveItemProps = {
  text: string
  thumbnailLink: string
  link: string
}

export const InteractiveItem: FC<InteractiveItemProps> = ({
  thumbnailLink,
  text,
  link,
}) => {
  return (
    <a
      className="transition-all duration-200 normal hover:hovered focus:hovered ml-1 py-0.5 px-1.5 rounded inline-flex items-center justify-center"
      href={link}
    >
      <Image
        className="mr-1"
        width={16}
        height={16}
        alt={thumbnailLink}
        src={thumbnailLink}
      />
      {text}
    </a>
  )
}
