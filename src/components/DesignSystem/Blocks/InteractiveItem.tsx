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
      className="ml-1 py-0.5 px-1.5 rounded border-solid border-2 border-slate-200 bg-slate-50 inline-flex items-center justify-center"
      href={link}
    >
      {text}
      <Image
        className="ml-1"
        width={16}
        height={16}
        alt={thumbnailLink}
        src={thumbnailLink}
      />
    </a>
  )
}
