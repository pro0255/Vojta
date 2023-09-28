import Image from 'next/image'
import { Author } from '@/components/Chat/types'

type Props = {
  author: Author
}

const createLink = (author: Author): string => {
  const base = '/assets'

  if (author === Author.Vojta) {
    return `${base}/vojta_avatar.jpeg`
  }

  if (author === Author.Guess) {
    return `${base}/guess_avatar.png`
  }

  throw new Error(`Unknown author ${author}`)
}

export const Avatar = ({ author }: Props) => {
  return (
    <Image
      className={'rounded-full'}
      width={65}
      height={65}
      alt={'avatar'}
      src={createLink(author)}
    />
  )
}
