import { MessageView } from '@/components/Chat/ChatWrapper/MessageView'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const VojtaThinking = () => {
  return (
    <MessageView
      content={
        <div className="p-2 bg-green-100 rounded-lg flex flex-row items-center justify-center animate-pulse">
          <AiOutlineLoading3Quarters
            className={'mr-5 fill-blue-500 animate-spin'}
          />
          ...Vojta is thinking
        </div>
      }
    />
  )
}
