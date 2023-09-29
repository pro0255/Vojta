import { AiOutlineCopy } from 'react-icons/ai'
import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'

type Props = {
  text: string
}

export const CopyButton = ({ text }: Props) => {
  const addFlashMessage = useFlashMessages(flashMessages => flashMessages.add)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    addFlashMessage({
      title: 'Copied to clipboard',
      content: text,
    })
  }

  return (
    <AiOutlineCopy
      onClick={copyToClipboard}
      size={20}
      className={'fill-gray-500 hover:fill-blue-500'}
    />
  )
}
