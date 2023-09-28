import { AiOutlineCopy } from 'react-icons/ai'

type Props = {
  text: string
}

export const CopyButton = ({ text }: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <AiOutlineCopy
      onClick={copyToClipboard}
      size={20}
      className={'fill-gray-500 hover:fill-blue-500'}
    />
  )
}
