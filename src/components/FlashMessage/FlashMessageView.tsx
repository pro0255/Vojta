import { FlashMessageType } from '@/components/FlashMessage/flashMessagesStore'
import { GrayText } from '@/components/DesignSystem'
import { BoldText } from '@/components/DesignSystem/Text/BoldText'

type Props = FlashMessageType

export const FlashMessageView = ({ id, title, content }: Props) => {
  return (
    <div
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
        className={
          'transition-all duration-300 ease-in-out w-[25%] border-l-2 border-slate-100 hover:bg-slate-100 focus:bg-slate-100'
        }
      >
        <GrayText>Close</GrayText>
      </button>
    </div>
  )
}
