import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'

export const useCreateCopyToClipboard = (text: string) => {
  const addFlashMessage = useFlashMessages(flashMessages => flashMessages.add)

  return <T extends HTMLElement>(e: React.MouseEvent<T>) => {
    e.preventDefault()
    navigator.clipboard.writeText(text)
    addFlashMessage({
      title: 'Copied to clipboard',
      content: text,
    })
  }
}
