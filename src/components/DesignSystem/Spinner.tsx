import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Spinner = () => {
  return (
    <AiOutlineLoading3Quarters
      className={'mr-5 fill-blue-500 animate-spin'}
      size={30}
    />
  )
}
