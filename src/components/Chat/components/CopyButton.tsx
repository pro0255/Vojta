import { AiOutlineCopy } from 'react-icons/ai'
import { useCreateCopyToClipboard } from '@/hooks/useCreateCopyToClipboard'

type Props = {
  text: string
}

export const CopyButton = ({ text }: Props) => {
  const copyToClipboard = useCreateCopyToClipboard(text)

  return (
    <button className={'flex flex-row items-center'} onClick={copyToClipboard}>
      <AiOutlineCopy
        size={20}
        className={'normalIcon hover:hoveredIcon focus:hoveredIcon'}
      />
    </button>
  )
}
