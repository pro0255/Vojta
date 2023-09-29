import { FlashMessageType } from '@/components/FlashMessage/flashMessagesStore'

type Props = FlashMessageType

export const FlashMessageView = ({ id, title, content }: Props) => {
  return <div>{content}</div>
}
