import { AiOutlineCopy } from 'react-icons/ai'
import { useCreateCopyToClipboard } from '@/hooks/useCreateCopyToClipboard'

type Props = {
  text: string
}

export const CopyButton = ({ text }: Props) => {
  const copyToClipboard = useCreateCopyToClipboard(text)

  return (
    <AiOutlineCopy
      onClick={copyToClipboard}
      size={20}
      className={'normalIcon hover:hoveredIcon'}
    />
  )
}
