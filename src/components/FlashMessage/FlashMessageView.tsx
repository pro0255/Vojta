import { FlashMessageType } from '@/components/FlashMessage/flashMessagesStore'
import { GrayText } from '@/components/DesignSystem'
import { BoldText } from '@/components/DesignSystem/Text/BoldText'
import { useEffect } from 'react'

type Props = FlashMessageType & {
  onHover: (messageId: string | null) => void
  onCloseClick: (messageId: string) => void
  removeTrigger: boolean
  removeFromManualRemove: (messageId: string) => void
}

export const FlashMessageView = ({
  id,
  title,
  content,
  onHover,
  onCloseClick,
  removeTrigger,
  removeFromManualRemove,
}: Props) => {
  useEffect(() => {
    if (removeTrigger) {
      onCloseClick(id)
      removeFromManualRemove(id)
    }
  }, [removeTrigger])

  return (
    <div
      onMouseOver={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={
        'flex flex-row bg-white shadow-2xl rounded w-[400px] max-h-[150px] overflow-hidden'
      }
    >
      <div className={'p-4 flex flex-col w-[75%]'}>
        <header className={'flex flex-row mb-3'}>
          <span>
            <BoldText>{title}</BoldText>
          </span>
        </header>
        <main className={'truncate'}>
          <GrayText>{content}</GrayText>
        </main>
      </div>
      <button
        onClick={() => onCloseClick(id)}
        className={
          'transition-all duration-300 ease-in-out w-[25%] border-l-2 border-slate-100 hover:hoveredWithoutBorder focus:hoveredWithoutBorder'
        }
      >
        <GrayText>Close</GrayText>
      </button>
    </div>
  )
}
